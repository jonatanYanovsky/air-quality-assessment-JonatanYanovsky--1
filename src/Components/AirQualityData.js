export default function AirQualityData(props) {
  let data = props.data;
  let loading = props.loading;
  let error = props.error;

  if (error.errorMessage) {
    return <div>error: {error.errorMessage}</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }
  if (data.length === 0) {
    return null;
  }

  return (
    <>
      <div>
        {data.value != null && (
          <>
            <div>
              {data.value.toFixed(4)} {data.unit} - {data.parameter}
            </div>
          </>
        )}
      </div>
    </>
  );
}
