"use client";

import { useCallback, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
} from "firebase/firestore";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

interface UcapanItem {
  id: string;
  nama: string;
  pesan: string;
  createdAt?: Timestamp;
}

const PAGE_SIZE = 5;
const MAX_PAGE = 10; // atur sesuai kebutuhan jika ingin batas pagination

export default function UcapanListPreview() {
  const [ucapan, setUcapan] = useState<UcapanItem[]>([]);
  const [pageDocs, setPageDocs] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

const fetchPage = useCallback(async (pageNumber: number) => {
  setLoading(true);

  let q;

  if (pageNumber === 1) {
    q = query(
      collection(db, "ucapan"),
      orderBy("createdAt", "desc"),
      limit(PAGE_SIZE)
    );
  } else {
    const last = pageDocs[pageNumber - 2];
    if (!last) return;
    q = query(
      collection(db, "ucapan"),
      orderBy("createdAt", "desc"),
      startAfter(last),
      limit(PAGE_SIZE)
    );
  }

  const snapshot = await getDocs(q);
  const newData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as UcapanItem[];

  setUcapan(newData);
  setCurrentPage(pageNumber);
  setHasMore(snapshot.docs.length === PAGE_SIZE);

  if (snapshot.docs.length > 0 && !pageDocs[pageNumber - 1]) {
    const newPageDocs = [...pageDocs];
    newPageDocs[pageNumber - 1] = snapshot.docs[snapshot.docs.length - 1];
    setPageDocs(newPageDocs);
  }

  setLoading(false);
}, [pageDocs]);


useEffect(() => {
  fetchPage(1);
}, [fetchPage]);


  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Background ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-20 animate-pulse delay-500" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h3
          className="text-2xl font-bold text-emerald-900 text-center mb-8 tracking-wide"
          style={{ fontFamily: "var(--font-undangan)" }}
        >
          Ucapan & Doa
        </h3>

        <ul className="space-y-4 mb-8">
          {ucapan.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-xl p-4 shadow border border-emerald-100 flex items-start gap-3"
            >
              <UserCircleIcon className="w-10 h-10 text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-900">
                  {item.nama}
                </p>
                {item.createdAt && (
                  <p className="text-xs text-gray-500 mb-1">
                    {formatDistanceToNow(item.createdAt.toDate(), {
                      addSuffix: true,
                      locale: id,
                    })}
                  </p>
                )}
                <p className="text-sm text-emerald-800 leading-relaxed">
                  {item.pesan}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center flex-wrap gap-2">
          {Array.from(
            { length: currentPage + (hasMore ? 1 : 0) },
            (_, i) => i + 1
          )
            .slice(0, MAX_PAGE)
            .map((p) => (
              <button
                key={p}
                onClick={() => fetchPage(p)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentPage === p
                    ? "bg-emerald-600 text-white shadow"
                    : "bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
                disabled={p === currentPage || loading}
              >
                {p}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
