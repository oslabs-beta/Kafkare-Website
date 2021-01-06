import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
  return (
    <>
      <div className="feature heading-container">
        <h1 className="heading">Features</h1>
      </div>
      <div className="features-body">
        <div className="feature-box 1">
          <div className="title">OS agnostic</div>
          <div className="feature-icon">
            <span>
              <Image
                src="/AppleOS.png"
                alt="Apple logo"
                width={60}
                height={60}
              />
            </span>
            <span>
              <Image
                src="/windowsOS.png"
                alt="Windows logo"
                width={60}
                height={60}
              />
            </span>
          </div>
          <div className="feature-body">
            <p>
              Cross-platform Kafka Monitoring packaged into an easy to use
              desktop application.
            </p>
          </div>
        </div>
        <div className="feature-box 2">
          <div className="title">Real-time data</div>
          <div className="feature-icon">
            <span>
              <Image
                src="/realtime.png"
                alt="clock logo"
                width={65}
                height={65}
              />
            </span>
          </div>
          <div className="feature-body">
            <p>
              Always up to date metrics for easy tracking of your Kafka system's
              health. Including information on brokers, topics, consumer lag and
              more.
            </p>
          </div>
        </div>
        <div className="feature-box 3">
          <div className="title">Secure</div>
          <div className="feature-icon">
            <span>
              <Image
                src="/secure.png"
                alt="secure logo"
                width={65}
                height={65}
              />
            </span>
          </div>
          <div className="feature-body">
            <p>
              Leveraging user authentication to ensure only authorized members
              can review the dashboard
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
