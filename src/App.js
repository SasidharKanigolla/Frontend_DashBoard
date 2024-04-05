import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBell,
  faBars,
  faMagnifyingGlass,
  faHeadset,
  faClock,
  faComments,
  faCaretDown,
  faLock,
  faUserPlus,
  faCircleHalfStroke,
  faCloudArrowDown,
  faBoxArchive,
  faCaretRight,
  faTableColumns,
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
  faComment,
  faStar,
  faMoon,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
function App() {
  const [IsVisible, setIsVisible] = useState(false);
  // const setVis = ()=>{
  //   setIsVisible(false);
  // }
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(!(window.innerWidth < 1024)); // Example threshold for "large" screen
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run effect only on mount
  return (
    <div className="APP">
      <div className="h-10 w-full fixed top-0 left-0 right-0  bg-blue-400 flex items-center justify-between">
        <p className=" text-center flex mx-auto text-white my-0">
          <span className="mr-1">Enable browser notifications </span>
          <span className="hidden md:block lg:block">
            to avoid missing out on important activity
          </span>
        </p>

        <div className="flex items-center ">
          <button className="bg-blue-600 flex items-center  px-2  py-1  text-white rounded-sm">
            <FontAwesomeIcon icon={faBell} shake style={{ color: "#ffffff" }} />
            <p className="hidden ml-1 lg:block ">Enable notifications</p>
          </button>
          <div className="mx-2">
            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------ */}

      <div className={`flex `}>
        <div
          className={
            IsVisible
              ? ` bg-gray-100  fixed   top-10 left-0 bottom-0 z-[1]  block lg:block w-[300px]`
              : ` bg-gray-100  hidden lg:hidden   w-[300px]`
          }
        >
          <div className="px-5 py-4 flex flex-col   ">
            <div className="">
              <div className="font-bold  flex justify-between items-center">
                <div className="flex  items-center">
                  {/* <FontAwesomeIcon
                    icon={faTeamspeak}
                    style={{ color: "#7d858c" }}
                  /> */}
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7829/7829198.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <p className="ml-2">Refero team</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBell} style={{ color: "#7d858c" }} />
                  {!IsVisible ? null : (
                    <div
                      className="lg:hidden ml-3"
                      onClick={() => setIsVisible(false)}
                    >
                      X
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center relative my-2">
                <div>
                  <FontAwesomeIcon
                    className="absolute left-3 top- transform -translate-y-1/2 h-5 w-5"
                    icon={faHeadset}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <input
                  type="text"
                  className=" flex-1 pl-10  pr-4 py-2 border rounded-lg w-full  placeholder-gray-500"
                  placeholder="Ask your AI assistant"
                />
                <div className="bg-white ml-2 rounded-lg  py-2 p-[6px]">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#7d858c" }}
                  />
                </div>
              </div>

              <div className="rounded-sm p-2 bg-gray-200">
                <p className="font-bold">Your team used 8/50 free docs </p>
                <p className="text-xs">Upgrade to create unlimited docs </p>
              </div>

              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Catch up</div>
              </div>
              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faComments}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Discussions</div>
              </div>

              <div className=" mt-4 ">
                <p className="font-semibold">Favourites</p>
                <div className="flex items-center mt-2">
                  <div className="mr-2 text-xl">👋</div>
                  <div className="">Getting started</div>
                </div>
              </div>

              <div className=" mt-4 ">
                <p className="font-semibold">My Channels</p>
                <div>
                  <div className="mt-2">
                    <div className="flex ">
                      <div className="mr-3">
                        {" "}
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          style={{ color: "#acb5bb" }}
                        />
                      </div>
                      <div className="mr-3">
                        <FontAwesomeIcon
                          icon={faLock}
                          style={{ color: "#7d858c" }}
                        />
                      </div>
                      My private Channels
                    </div>

                    <div className="ml-4 mt-2 bg-indigo-100 p-2">
                      <div className="ml-4">👋 Getting started</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 ">
                  <div className="mr-3">
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{ color: "#acb5bb" }}
                    />
                  </div>

                  <div className="mr-3">
                    <FontAwesomeIcon
                      icon={faTableColumns}
                      style={{ color: "#7d858c" }}
                    />
                  </div>
                  <div className="">Engineering</div>
                </div>

                <div className="flex items-center mt-2 ">
                  <div className="mr-3">
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{ color: "#acb5bb" }}
                    />
                  </div>

                  <div className="mr-3">
                    <FontAwesomeIcon
                      icon={faTableColumns}
                      style={{ color: "#7d858c" }}
                    />
                  </div>
                  <div className="">Product</div>
                </div>
              </div>
            </div>
            {/* cut it out */}
            <div className="fixed bottom-0">
              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Add people</div>
              </div>
              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faCircleHalfStroke}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Templates</div>
              </div>
              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faCloudArrowDown}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Shared with me</div>
              </div>
              <div className="my-2 flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faBoxArchive}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div>Archive</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>Left</div> */}
        <div className="right flex-1 mt-10  ml-0 lg:ml-[300px]">
          <div className="bg-slate-200  flex justify-between items-center w-full">
            <div className="flex items-center ">
              <div className="ml-4">
                <button
                  className="bg-slate-200 p-2 block "
                  onClick={() => setIsVisible(true)}
                >
                  <FontAwesomeIcon icon={faBars} style={{ color: "#7d858c" }} />
                </button>
              </div>
              <div className="ml-4">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: "#7d858c" }}
                />
              </div>
              <div className="ml-4">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#7d858c" }}
                />
              </div>

              <div className="flex ml-3 ">
                <div className="mr-3">
                  <FontAwesomeIcon icon={faLock} style={{ color: "#7d858c" }} />
                </div>
                My private Channels
                <div className="ml-3">/</div>
                <div className="ml-4">
                  <p className="hidden lg:block md:block">👋 Getting started</p>
                  <p className="block md:hidden lg:hidden">...</p>
                </div>
              </div>
            </div>
            <div className="flex mr-4">
              <div className="flex ">
                <div className="mr-4 hidden  md:block lg:block">share</div>
                <div className="mr-4 hidden md:block lg:block">
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ color: "#7d858c" }}
                  />
                </div>
                <div className="mr-4 hidden  md:block lg:block">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                </div>
              </div>
              <div className="mr-4">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  style={{ color: "#7d858c" }}
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col w-[70%] items-start bg-white">
                <div className="m-4">
                  <div className="text-4xl font-bold">Getting Started</div>
                  <div className="flex my-4 p-4 bg-slate-200 rounded-xl">
                    <div>🔒</div>
                    <div>
                      This doc is in your <b>pricate channel</b>, ehrer you can
                      store you private work. You can share docs one by one from
                      here, but to properly organize your team's knowledge base,
                      use <b>workspace channels</b>.
                      <br />
                      <br />
                      You can make channels <b>public</b> to make all docs
                      visible to everyone on the team, or <b>private</b> if you
                      want the channel's docs to only visible by a selection of
                      templates
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <div className="text-4xl font-bold ">
                    Collaborate with your team with these three features
                  </div>
                  <div className="my-2">
                    <div className="my-2"> ✍ Docs</div>
                    <div className="flex justify-center relative">
                      <p className="absolute left-10 top-10 font-bold text-3xl lg:z-10 ">
                        Create docs to Collaborate with your team
                      </p>
                      <img
                        className="w-full object-cover h-72 rounded-sm lg:z-0"
                        // src="images/"
                        src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=300"
                        // src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="img"
                        //  style="z-index: -1;"
                      />
                    </div>
                  </div>
                </div>
                <div className="m-4 w-[97%] p-3 bg-slate-200">
                  <div className="">
                    <div className="text-md">
                      💡 Give it a go by typing / below
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed right-5 bottom-24 px-4 py-2  rounded-sum">
              <FontAwesomeIcon icon={faMoon} style={{ color: "#7d858c" }} />
            </div>
            <div className="fixed right-5 bottom-10 px-4 py-2  bg-blue-100 rounded-sum">
              <div className="relative h-full  w-full">
                <div className="absolute right-[-20px] top-[-13px] flex items-center justify-center h-3 w-3 text-blue-600 bg-blue-600 rounded-full text-xs">
                  .
                </div>
                <FontAwesomeIcon
                  icon={faQuestion}
                  style={{ color: "#046df6" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
