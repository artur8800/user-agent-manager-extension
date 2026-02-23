function AppTableHeading({ headingText }: { headingText: string }) {
  return (
    <div className="p-4 pb-0 text-center">
      <h4 className="text-lg font-bold">{headingText}</h4>
    </div>
  );
}

export default AppTableHeading;
