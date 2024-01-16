import React from "react";

const ReviewDetails = ({params}) => {
  return (
    <>
    <div>Review {params.reviewId} for product {params.productId}</div>
    </>
  );
};

export default ReviewDetails;
