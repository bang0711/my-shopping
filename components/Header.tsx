"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";
type Props = {};

const sortByMap = {
  r: "Default",
  rv: "Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

function Header({}: Props) {
  const [pages, setPages] = useState("");
  const [sort_by, setSortBy] = useState("r");
  const [min_price, setMinPrice] = useState("");
  const [max_price, setMaxPrice] = useState("");
  const router = useRouter();
  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
      <Link href={"/"}>
        <Image
          src={"https://links.papareact.com/208"}
          alt="logo"
          width={150}
          height={150}
          className="object-contain mr-10"
        />
      </Link>

      <div className="w-full md:max-w-2xl">
        <form
          action={(formData) => {
            const searchTerm = formData.get("searchTerm");

            if (!searchTerm) return;
            const params = new URLSearchParams();
            if (pages) {
              params.set("pages", pages.toString());
            }
            if (sort_by) {
              params.set("sort_by", sort_by.toString());
            }
            if (min_price) {
              params.set("min_price", min_price.toString());
            }
            if (max_price) {
              params.set("max_price", max_price.toString());
            }

            router.push(`/search/${searchTerm}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 w-full px-4">
            <div className="flex items-center space-x-2 border-gray-200 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none"
                name="searchTerm"
              />
            </div>

            <SearchButton />
          </div>

          <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto items-center">
            <SearchSelect
              onValueChange={(value) => setPages(value)}
              className="min-w-4"
              placeholder="# of pages"
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <Select
              onValueChange={(value) => setSortBy(value)}
              className="min-w-4"
              placeholder="Sort"
            >
              {Object.entries(sortByMap).map(([key, value]) => (
                <SelectItem key={key} value={value}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect
              onValueChange={(value) => setMinPrice(value)}
              className="min-w-4"
              placeholder="Min Price"
            >
              {["", "100", "250", "500", "750", "900", "1000"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Minimum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <SearchSelect
              onValueChange={(value) => setMaxPrice(value)}
              className="min-w-4"
              placeholder="Max Price"
            >
              {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Maximum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <Avatar name="Chan Bang" round size="50" facebookId="100083708621101" />
      </div>
    </header>
  );
}

export default Header;
