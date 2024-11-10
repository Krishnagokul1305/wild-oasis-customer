"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function FilterButton({ label, filterValue, activeFilter, onChange }) {
  return (
    <div
      className={`px-5 py-2 border border-primary-800 rounded-md cursor-pointer hover:bg-primary-800 ${
        activeFilter === filterValue && "bg-primary-800"
      }`}
      onClick={() => onChange(filterValue)}
    >
      {label}
    </div>
  );
}

function Filter() {
  const params = useSearchParams();
  const path = usePathname();
  const router = useRouter();
  const activeFilter = params.get("capacity") ?? "all";

  function handleChange(filter) {
    if (filter === activeFilter) return;
    const param = new URLSearchParams(params);
    param.set("capacity", filter);
    router.replace(`${path}?${param.toString()}`);
  }

  return (
    <div className="flex items-center justify-end gap-3">
      <FilterButton
        label="All"
        filterValue="all"
        activeFilter={activeFilter}
        onChange={handleChange}
      />
      <FilterButton
        label="1-3 Guests"
        filterValue="small"
        activeFilter={activeFilter}
        onChange={handleChange}
      />
      <FilterButton
        label="4-6 Guests"
        filterValue="medium"
        activeFilter={activeFilter}
        onChange={handleChange}
      />
      <FilterButton
        label="6-10 Guests"
        filterValue="large"
        activeFilter={activeFilter}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
