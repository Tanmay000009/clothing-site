import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51KMuTCSGMFVSgUqXZ8aBASHRDAKnjHiVyYAOGFwjVDMoPftAVMj5xsZ8QBHfImRbL0jSUyOW8INNUd5UL8L7Yqv700ACTvPWL4";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((res) => {
        alert("Payment Succesful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert("There was an issue with your payment");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Brand"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
