import { CheckCircleIcon } from "@heroicons/react/20/solid";
import PageBanner from "../components/PageBanner";

export default function StatementOfFaith() {
  return (
    <div className="-mt-16">
      <PageBanner imageBannerSrc="img4.jpeg" />

      <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="bg-white">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Statement of Faith
              </h1>
              <p className="mt-6 text-xl leading-8">
              </p>
              <div className="mt-10 max-w-3xl">
                <ul
                  role="list"
                  className="mt-8 max-w-3xl space-y-8 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in the Bible as the inspired Word of God. (2
                      Tim 3:16-17; 2 Pet. 1:20, 21)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in one God revealed in three persons: God the
                      Father, God the Son and God the Holy Spirit. They are
                      equal in every divine perfection and attribute, executing
                      separate but coordinating offices in the redemption of
                      man. (Gen. 1:26; 2 Cor. 13:14; 1 Tim. 1:17; Mark 12:29;
                      Exodus 3:14; John 8:38; Hebrews 1:8; Acts 5:3-4; John
                      14:16-17a, 26; John 1:26)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in God the Son, conceived by the Holy Spirit,
                      born by a virgin, who came in the flesh in the form of
                      man, who died on behalf of sinners and came back to life
                      on the third day and is now at the right hand of God the
                      Father interceding on our behalf. (Matt. 1;18; 1:23; Phil.
                      2:6-11; 1 Tim. 2:5; Rom. 5:8; Heb. 4:14; Rom. 8:34; 1 John
                      2:1; Heb. 7:25)
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in the baptism of the Holy Spirit. The Holy
                      Spirit distributes spiritual gifts just as He determines
                      for the edification of the church. (1 Cor. 12:7-11; Rom.
                      12:6-8; Eph. 11-13)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in the fall of man resulting from the
                      disobedience of Adam. For a man to be restored to God, he
                      has to be born again. He needs to accept Jesus Christ as
                      his personal Savior and Lord to have everlasting life.
                      (Gen. 3:17-19; Rom. 3:23; Rom. 5:12; Rom. 6:23; John 3:3;
                      John 3:16; 1 John 5:11-12)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in the observance of the Lord's Supper and
                      water baptism by immersion. (Matt. 26:26-28; 1 Cor.
                      11:23-26; Matt. 28:19; Mark 16:16; Rom. 6:1-4; Col. 2:12)
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in heaven as the habitation of the Living God,
                      where the Lord Jesus Christ had gone to prepare a place
                      for the believers. This is an actual place where the
                      believers will dwell eternally. (John 14:2; 2 Peter 3:13;
                      Rev. 21:1-27; Rev. 22:1-5)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in hell which is actual place of damnation
                      prepared by God for the devil and his angels. The unsaved
                      will be thrown into hell. (2 Pet. 2:4; Matt. 25:41; Rev.
                      20:12-14; Mark 9:43-48)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-appGreen"
                      aria-hidden="true"
                    />
                    <span>
                      We believe in the second coming of the Lord Jesus Christ
                      being personal and at any time. (John 14:2-3; Acts 1:11;
                      Matt. 24:30,36,37; Matt. 26:64; 1 Thess 4:16-17)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
