"use client";
import { deleteBookedService } from "@/actions/server/serviceBook";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const CancelButton = ({ singlebooking }) => {
  const router = useRouter();
  const handleCancelButton = async () => {
    const { orderId } = singlebooking;

    const cancel = await deleteBookedService({ id: orderId });

    if (cancel.deletedCount) {
      Swal.fire("success", "Cancel Successfully", "success");
      router.refresh();
    } else {
      Swal.fire("err", "cancel error", "error");
    }
  };
  return (
    <div>
      <button className="btn" onClick={handleCancelButton}>
        Cancel
      </button>
    </div>
  );
};

export default CancelButton;
