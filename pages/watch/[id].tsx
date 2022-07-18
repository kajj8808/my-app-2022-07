export default function Watch({ params }: any) {
  return (
    <div>
      <div>
        <video controls autoPlay>
          <source src={`http://shirabii.tk:5000/videos/${params.id}.mkv`} />
        </video>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      params,
    },
  };
}
