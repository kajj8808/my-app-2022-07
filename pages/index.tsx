import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
//1658072341275.mkv 새벽의
//1658065573945.mkv 리코
//1658074121800.mkv 메이드 인 어비스
const Home: NextPage = () => {
  const router = useRouter();
  function onClick(id: string) {
    router.push(`/watch/${id}`);
  }
  return (
    <div className="h-screen w-full">
      <div className="flex space-x-6">
        {[
          {
            id: "1658072341275",
            title: "철야의 노래",
            thembnail:
              "https://www.themoviedb.org/t/p/w500_and_h282_face/fzJsAkCfWIVF0tufwBa78TN9QxN.jpg",
          },
          {
            id: "1658065573945",
            title: "리코리스 리코일",
            thembnail:
              "https://www.themoviedb.org/t/p/w500_and_h282_face/htG5EU3tV8HMro9Hpa03YgiyZeR.jpg",
          },
          {
            id: "1658074121800",
            title: "메이드 인 어비스",
            thembnail:
              "https://www.themoviedb.org/t/p/w500_and_h282_face/faEKyqjgnPw6oZ0niowLYsjT5qD.jpg",
          },
        ].map((result, index) => (
          <div
            key={index}
            onClick={() => onClick(result.id)}
            className="h-48 w-48 cursor-pointer overflow-hidden bg-lime-800"
          >
            <span>{result.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
