import React, { ReactElement, useEffect } from "react";
import "boxicons";
import { useState } from "react";
{/* @ts-ignore */}
import { default as api } from "../store/apiSlice";

export function List() {
  const [transactions, setTransactions] = useState<any>();
  const [dataHook, setDataHook] = useState();

  let { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const [didDelete, setDidDelete] = useState(false)

  const handlerClick = (e: any) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
    data = data.filter((obj: any)=>{
        return obj._id !== e.target.dataset.id
    })
    console.log(data)
    if (data.length < 0) return 0
    const elements = data.map((v: any, i: any)=>{
        return (
            <Transaction
              key={i}
              category={v}
              handler={handlerClick}
            ></Transaction>
          );
    })
    setTransactions(()=>{
        return [...elements]
    })


  };

  useEffect(() => {
    if (isFetching) {
      setTransactions(<div>Fetching</div>);
    } else if (isError) {
      setTransactions(<div>Error</div>);
    }
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      setDataHook(data);
      setTransactions(
        data.map((v: any, i: any) => {
          return (
            <Transaction
              key={i}
              category={v}
              handler={handlerClick}
            ></Transaction>
          );
        })
      );
    }
  }, [isSuccess]);

  useEffect(()=>{
    console.log(transactions)
  },[transactions])

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {transactions}
    </div>
  );
}

function Transaction({
  category,
  handler,
}: {
  category: any;
  handler: (e: any) => void;
}) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={handler}>
        {" "}
        {/* @ts-ignore */}
        <box-icon
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}
