interface TDynamic {
  params: {
    projectID: string;
  };
}
const DynamicProjectDetail = ({ params }: TDynamic) => {
  return (
    <div className="text-white h-screen z-10 pt-36">
      <h1>Dynamic prams is{params.projectID}</h1>
    </div>
  );
};

export default DynamicProjectDetail;
