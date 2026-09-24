import Link from "next/link";
import { site } from "@/lib/site";
import "./MobileBottomBar.css";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" role="group" aria-label="Quick actions">
      <a href={`tel:${site.phoneIntl}`} className="mobile-bottom-bar__action">
        Call Now
      </a>
      <Link href="/quote" className="mobile-bottom-bar__action is-primary">
        Get a Quote
      </Link>
    </div>
  );
}