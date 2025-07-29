function Ticker({ ticker }: { ticker: string | null }) {
  return (
    <div className="fixed z-50 h-auto w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
      {ticker?.trim() === "Email Sent." ? (
        <iframe src="https://lottie.host/embed/f3b33e6a-5511-432f-8389-c337698fa877/3P2a9B6bt0.lottie"></iframe>
      ) : (
        <iframe src="https://lottie.host/embed/d6b0b000-d852-41af-bc27-5dc2734babc7/P8oIeezRZO.lottie"></iframe>
      )}
    </div>
  );
}

export default Ticker;
