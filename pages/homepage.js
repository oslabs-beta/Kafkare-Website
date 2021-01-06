import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="logo">
        <Image
          src="/kafk.png"
          alt="Kafkare main logo"
          width={720}
          height={300}
        />
        <div className="logotext">
          <h1>A System Monitoring Tool For Kafka.</h1>
        </div>
        <div className="btn">
          <Link href="https://github.com/oslabs-beta/KafKare">
            <a>
              <button>
                <p className="gitbtn">Check out our github </p>
                <Image
                  className="gitbtn"
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={32}
                  height={32}
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
