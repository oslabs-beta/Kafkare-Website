import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <div className="about heading-container">
        <h1 className="heading">Meet The Team</h1>
      </div>
      <div className="about-row">
        <div className="profile">
          <div className="avatar">
            <Image
              className="pic"
              src="/jenniel.jpeg"
              alt="jenniel avatar"
              width={200}
              height={200}
            />
          </div>
          <h4 className="name">Jenniel Figuereo</h4>

          <div className="contact">
            <Link href="https://www.linkedin.com/in/jf1/">
              <a>
                <Image
                  src="/linkedin.png"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://github.com/jfiguereo89">
              <a>
                <Image
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={45}
                  height={45}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="profile">
          <div className="avatar">
            <Image
              className="pic"
              src="/jiaxin2.png"
              alt="jiaxin avatar"
              width={200}
              height={200}
            />
          </div>
          <h4 className="name">
            Jiaxin Li
            <i class="fab fa-linkedin"></i>
          </h4>

          <div className="contact">
            <Link href="https://www.linkedin.com/in/lijiaxingogo/">
              <a>
                <Image
                  src="/linkedin.png"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://github.com/lijiaxingogo">
              <a>
                <Image
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={45}
                  height={45}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="profile">
          <div className="avatar">
            <Image
              className="pic"
              src="/Joel.jpg"
              alt="joel avatar"
              width={200}
              height={200}
            />
          </div>
          <h4 className="name">Joel Beger</h4>
          <h5 className="engineer">Software Engineer</h5>
          <h6 className="bio">
            Hi I'm Joel. I like turtles. I also like long walks on the beach.
            Sometimes I wonder if there's a cat heaven. It makes me cry.
          </h6>

          <div className="contact">
            <Link href="https://www.linkedin.com/in/jtbeger/">
              <a>
                <Image
                  src="/linkedin.png"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://github.com/jtbeger">
              <a>
                <Image
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={45}
                  height={45}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="profile">
          <div className="avatar">
            <Image
              className="pic"
              src="/waifai.png"
              alt="waifai avatar"
              width={200}
              height={200}
            />
          </div>
          <h4 className="name">Wai Fai Lau</h4>

          <div className="contact">
            <Link href="https://www.linkedin.com/in/wai-fai-lau/">
              <a>
                <Image
                  src="/linkedin.png"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://github.com/wlau8088">
              <a>
                <Image
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={45}
                  height={45}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
