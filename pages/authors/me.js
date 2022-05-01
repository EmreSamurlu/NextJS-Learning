import Image from "next/image";
import Link from "next/link";
export default function Me() {
  return (
    <div>
      <div>
        <h1>Emre Samurlu</h1>
        <Image src="/images/profile.jpg" width={280} height={360} />
      </div>
      <div>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    </div>
  );
}
