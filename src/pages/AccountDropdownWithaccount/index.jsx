import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import {
  Img,
  Slider,
  Text,
  Line,
  PagerIndicator,
  Button,
  List,
} from "components";
import AccountDropdownWithAccountColumnTwo from "components/AccountDropdownWithAccountColumnTwo";
import ECommerceHomePageColumn from "components/ECommerceHomePageColumn";
import ECommerceHomePageColumnOne from "components/ECommerceHomePageColumnOne";
import ECommerceHomePageColumn1 from "components/ECommerceHomePageColumn1";
import ECommerceHomePageColumn2 from "components/ECommerceHomePageColumn2";
import ECommerceHomePageCart from "components/ECommerceHomePageCart";
import ECommerceHomePageCart1 from "components/ECommerceHomePageCart1";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageCart3 from "components/ECommerceHomePageCart3";
import ECommerceHomePageFlashselltimer from "components/ECommerceHomePageFlashselltimer";
import ECommerceHomePageFlashselltimer1 from "components/ECommerceHomePageFlashselltimer1";
import ECommerceHomePageFlashselltimer2 from "components/ECommerceHomePageFlashselltimer2";
import ECommerceHomePageFlashselltimer3 from "components/ECommerceHomePageFlashselltimer3";
import ECommerceHomePageCart4 from "components/ECommerceHomePageCart4";
import ECommerceHomePageCart5 from "components/ECommerceHomePageCart5";
import ECommerceHomePageCart6 from "components/ECommerceHomePageCart6";
import ECommerceHomePageColumncurologyj7pkvqr from "components/ECommerceHomePageColumncurologyj7pkvqr";
import ECommerceHomePageCart7 from "components/ECommerceHomePageCart7";
import ECommerceHomePageCart8 from "components/ECommerceHomePageCart8";
import ECommerceHomePageCart9 from "components/ECommerceHomePageCart9";
import ECommerceHomePageCart10 from "components/ECommerceHomePageCart10";
import ECommerceHomePageListcut from "components/ECommerceHomePageListcut";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const AccountDropdownWithaccountPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] overflow-auto w-[100%]">
        <ECommerceHomePageTopheader
          className="bg-black_900 flex flex-col items-end justify-start p-[12px] w-[100%]"
          offer="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          shopnow="ShopNow"
          language="English"
        />
        <ECommerceHomePageHeader
          className="flex flex-row flex-wrap font-inter items-center justify-between max-w-[1170px] mt-[40px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
          exclusive="Exclusive"
          contact="Contact"
          about="About"
          signup="Sign Up"
          user="images/img_user.svg"
        />
        <div className="font-poppins md:h-[386px] h-[402px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Img
                src="images/img_line3.svg"
                className="h-[1px] w-[auto]"
                alt="lineThree"
              />
              <div className="h-[386px] relative md:w-[100%] w-[82%]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="m-[auto] w-[100%]"
                  items={[...Array(15)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-black_900 flex items-end justify-end mx-[10px] pl-[16px] pt-[16px]">
                        <div className="h-[328px] relative md:w-[100%] w-[95%]">
                          <div className="h-[328px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[60%]">
                            <Img
                              src="images/img_heroendframe.png"
                              className="h-[328px] m-[auto] object-cover w-[100%]"
                              alt="heroendframe"
                            />
                            <div className="absolute bg-red_600 bottom-[4%] h-[10px] left-[1%] rounded-[50%] w-[10px]"></div>
                          </div>
                          <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[36%]">
                            <div className="flex flex-row font-poppins gap-[24px] items-center justify-start self-stretch w-[auto]">
                              <Img
                                src="images/img_1200pxapplegraylogo.png"
                                className="h-[49px] md:h-[auto] object-cover w-[40px]"
                                alt="1200pxapplegray"
                              />
                              <Text
                                className="font-normal not-italic text-center text-gray_50 w-[auto]"
                                variant="body3"
                              >
                                iPhone 14 Series
                              </Text>
                            </div>
                            <Text
                              className="font-inter font-semibold leading-[60.00px] mt-[20px] text-gray_50 text-left tracking-[1.92px] w-[100%]"
                              as="h3"
                              variant="h3"
                            >
                              Up to 10% off Voucher
                            </Text>
                            <div className="flex flex-row font-poppins gap-[8px] items-center justify-start md:ml-[0] ml-[3px] mt-[22px] self-stretch w-[auto]">
                              <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-medium text-center text-gray_50 w-[auto]"
                                  variant="body3"
                                >
                                  Shop Now
                                </Text>
                                <Line className="bg-gray_50 h-[1px] w-[100%]" />
                              </div>
                              <Img
                                src="images/img_arrowright_gray_50.svg"
                                className="h-[24px] w-[24px]"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-[14px] border-white_A700 border-[2px] border-solid w-[14px] relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700_87 w-[12px] relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[3%] flex gap-[11px] h-[14px] items-center justify-center right-[37%] self-stretch w-[106px]"
                  count={5}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[14px] border-white_A700 border-[2px] border-solid w-[14px] relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700_87 w-[12px] relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
          <AccountDropdownWithAccountColumnTwo
            className="absolute flex flex-col items-center justify-start right-[9%] top-[0] sm:w-[100%] w-[auto]"
            managemyaccountOne="Manage My Account"
            myorder="My Order"
            mycancellationsOne="My Cancellations"
            myreviews="My Reviews"
            logout="Logout"
          />
        </div>
        <div className="flex font-poppins items-end mt-[137px] pl-[135px] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[470px] items-end justify-between self-stretch md:w-[100%] w-[auto]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[87px] items-end justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[24px] h-[109px] md:h-[auto] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-red_600 h-[40px] rounded-[4px] w-[20%]"></div>
                    <Text
                      className="font-semibold text-left text-red_600 w-[auto]"
                      variant="body3"
                    >
                      Today’s
                    </Text>
                  </div>
                  <Text
                    className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Flash Sales
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between sm:w-[100%] w-[51%]">
                  <div className="flex flex-col gap-[4px] h-[55px] md:h-[auto] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium font-poppins text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Days
                    </Text>
                    <Text
                      className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      03
                    </Text>
                  </div>
                  <Img
                    src="images/img_semiclone.svg"
                    className="h-[16px] mt-[26px] w-[4px]"
                    alt="semiclone"
                  />
                  <div className="flex flex-col gap-[4px] h-[56px] md:h-[auto] items-start justify-start w-[43px]">
                    <Text
                      className="font-medium font-poppins text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Hours
                    </Text>
                    <Text
                      className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      23
                    </Text>
                  </div>
                  <Img
                    src="images/img_semiclone.svg"
                    className="h-[16px] mt-[26px] w-[4px]"
                    alt="semiclone_One"
                  />
                  <div className="flex flex-col gap-[4px] h-[57px] md:h-[auto] items-start justify-start w-[49px]">
                    <Text
                      className="font-medium font-poppins text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Minutes
                    </Text>
                    <Text
                      className="font-bold font-inter h-[39px] text-black_900 text-left tracking-[1.28px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      19
                    </Text>
                  </div>
                  <Img
                    src="images/img_semiclone.svg"
                    className="h-[16px] mt-[26px] w-[4px]"
                    alt="semiclone_Two"
                  />
                  <div className="flex flex-col gap-[4px] h-[57px] md:h-[auto] items-start justify-start w-[52px]">
                    <Text
                      className="font-medium font-poppins text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Seconds
                    </Text>
                    <Text
                      className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      56
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-[24px]"
                    alt="arrowleft_One"
                  />
                </Button>
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowright_black_900.svg"
                    className="h-[24px]"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start self-stretch md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <ECommerceHomePageColumn
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _40="-40%"
                havithvg92GamepOne="HAVIT HV-G92 Gamepad"
                price="$120"
                oldprice="$160"
                eightyeight="(88)"
              />
              <ECommerceHomePageColumnOne
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _35="-35%"
                addtocart="Add To Cart"
                ak900WiredkeyboOne="AK-900 Wired Keyboard"
                price="$960"
                oldprice="$1160"
                seventyfive="(75)"
              />
              <ECommerceHomePageColumn1
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _30="-30%"
                ipslcdgamingmonOne="IPS LCD Gaming Monitor"
                price="$370"
                oldprice="$400"
                ninetynine="(99)"
              />
              <ECommerceHomePageColumn2
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _25="-25%"
                language="S-Series Comfort Chair "
                price="$375"
                oldprice="$400"
                ninetynine="(99)"
              />
              <ECommerceHomePageColumn2
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _25="-25%"
                language="S-Series Comfort Chair "
                price="$375"
                oldprice="$400"
                ninetynine="(99)"
              />
            </List>
          </div>
        </div>
        <Button className="bg-red_600 cursor-pointer font-medium min-w-[234px] mt-[59px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
          View All Products
        </Button>
        <Line className="bg-black_900_75 h-[1px] max-w-[1170px] mt-[60px] mx-[auto] rotate-[-180deg] w-[100%]" />
        <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[79px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[691px] items-end justify-between self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-red_600 h-[40px] rounded-[4px] w-[16%]"></div>
                <Text
                  className="font-semibold text-left text-red_600 w-[auto]"
                  variant="body3"
                >
                  Categories
                </Text>
              </div>
              <Text
                className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Browse By Category
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="h-[24px]"
                  alt="arrowleft_Two"
                />
              </Button>
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="h-[24px]"
                  alt="arrowright_One"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start self-stretch md:w-[100%] w-[auto]"
            orientation="horizontal"
          >
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[16px] items-center justify-end p-[23px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_mobile.svg"
                className="h-[56px] w-[56px]"
                alt="mobile"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Phones
              </Text>
            </div>
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[18px] items-center justify-end p-[21px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_computer.svg"
                className="h-[56px] mt-[3px] w-[56px]"
                alt="computer"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Computers
              </Text>
            </div>
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[16px] items-center justify-end p-[23px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_trash.svg"
                className="h-[56px] w-[56px]"
                alt="trash"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                SmartWatch
              </Text>
            </div>
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[16px] items-center justify-end p-[23px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_camera_black_900.svg"
                className="h-[56px] w-[56px]"
                alt="camera"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Camera
              </Text>
            </div>
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[16px] items-center justify-end p-[23px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_music.svg"
                className="h-[56px] w-[56px]"
                alt="music"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                HeadPhones
              </Text>
            </div>
            <div className="border-[1px] border-black_900_4c border-solid flex flex-col gap-[18px] items-center justify-end p-[21px] sm:px-[20px] rounded-[4px] w-[100%]">
              <Img
                src="images/img_calculator.svg"
                className="h-[56px] mt-[3px] w-[56px]"
                alt="calculator"
              />
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Gaming
              </Text>
            </div>
          </List>
        </div>
        <Line className="bg-black_900_75 h-[1px] max-w-[1170px] mt-[70px] mx-[auto] rotate-[-180deg] w-[100%]" />
        <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[69px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[611px] items-end justify-between self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-red_600 h-[40px] rounded-[4px] w-[16%]"></div>
                <Text
                  className="font-semibold text-left text-red_600 w-[auto]"
                  variant="body3"
                >
                  This Month
                </Text>
              </div>
              <Text
                className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Best Selling Products
              </Text>
            </div>
            <Button className="bg-red_600 cursor-pointer font-medium min-w-[159px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
              View All
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch md:w-[100%] w-[auto]"
            orientation="horizontal"
          >
            <ECommerceHomePageCart
              className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
              thenorthcoat="The north coat"
              price="$260"
              oldprice="$360"
              sixtyfive="(65)"
            />
            <ECommerceHomePageCart1
              className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
              guccidufflebag="Gucci duffle bag"
              price="$960"
              oldprice="$1160"
              sixtyfive="(65)"
            />
            <ECommerceHomePageCart2
              className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
              rgbliquidcpucooOne="RGB liquid CPU Cooler"
              price="$160"
              oldprice="$170"
              sixtyfive="(65)"
            />
            <ECommerceHomePageCart3
              className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
              smallbookself="Small BookSelf"
              price="$360"
              sixtyfive="(65)"
            />
          </List>
        </div>
        <div className="bg-black_900 flex items-center justify-start max-w-[1170px] mt-[139px] mx-[auto] md:px-[20px] px-[44px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start md:w-[100%] w-[99%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[42%]">
              <Text
                className="font-poppins font-semibold text-green_A400 text-left w-[auto]"
                variant="body3"
              >
                Categories
              </Text>
              <Text
                className="font-inter font-semibold leading-[60.00px] mt-[27px] text-gray_50 text-left tracking-[1.92px] w-[100%]"
                as="h3"
                variant="h3"
              >
                Enhance Your Music Experience
              </Text>
              <List
                className="sm:flex-col flex-row font-poppins gap-[24px] grid grid-cols-4 justify-start mt-[32px] self-stretch w-[auto]"
                orientation="horizontal"
              >
                <ECommerceHomePageFlashselltimer
                  className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-[100%]"
                  twentythree="23"
                  hours="Hours"
                />
                <ECommerceHomePageFlashselltimer1
                  className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-[100%]"
                  five="05"
                  days="Days"
                />
                <ECommerceHomePageFlashselltimer2
                  className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[9px] rounded-[50%] w-[100%]"
                  fiftynine="59"
                  minutes="Minutes"
                />
                <ECommerceHomePageFlashselltimer3
                  className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[7px] rounded-[50%] w-[100%]"
                  thirtyfive="35"
                  seconds="Seconds"
                />
              </List>
              <Button className="bg-green_A400 cursor-pointer font-medium font-poppins min-w-[171px] mt-[40px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                Buy Now!
              </Button>
            </div>
            <div className="h-[500px] relative md:w-[100%] w-[57%]">
              <div className="absolute backdrop-opacity-[0.5] bg-bluegray_100_75 blur-[200.00px] h-[500px] inset-y-[0] left-[4%] my-[auto] rounded-[252px] w-[84%]"></div>
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[16px] w-[100%]">
                <Img
                  src="images/img_jblboombox2hero020x1.png"
                  className="h-[330px] md:h-[auto] my-[29px] object-cover w-[100%]"
                  alt="jblboombox2hero"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-center justify-start max-w-[1170px] mt-[71px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[672px] items-end justify-between self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
                  <div className="bg-red_600 h-[40px] rounded-[4px] w-[15%]"></div>
                  <Text
                    className="font-semibold text-left text-red_600 w-[auto]"
                    variant="body3"
                  >
                    Our Products
                  </Text>
                </div>
                <Text
                  className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Explore Our Products
                </Text>
              </div>
              <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-[24px]"
                    alt="arrowleft_Three"
                  />
                </Button>
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowright_black_900.svg"
                    className="h-[24px]"
                    alt="arrowright_Two"
                  />
                </Button>
              </div>
            </div>
            <div className="md:gap-[40px] gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] self-stretch md:w-[100%] w-[auto]">
              <ECommerceHomePageCart4
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                breeddrydogfoodOne="Breed Dry Dog Food"
                price="$100"
                thirtyfive="(35)"
              />
              <ECommerceHomePageCart5
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocart="Add To Cart"
                canoneosdslrcamOne="CANON EOS DSLR Camera"
                price="$360"
                ninetyfive="(95)"
              />
              <ECommerceHomePageCart6
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                asusfhdgaming="ASUS FHD Gaming Laptop"
                price="$700"
                threehundredtwentyfive="(325)"
              />
              <ECommerceHomePageColumncurologyj7pkvqr
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                language="Curology Product Set "
                price="$500"
                onehundredfortyfive="(145)"
              />
              <ECommerceHomePageCart7
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                new="NEW"
                kidselectriccarOne="Kids Electric Car"
                price="$960"
                sixtyfive="(65)"
              />
              <ECommerceHomePageCart8
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                jrzoomsoccer="Jr. Zoom Soccer Cleats"
                price="$1160"
                thirtyfive="(35)"
              />
              <ECommerceHomePageCart9
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                new="NEW"
                gp11Shooterusb="GP11 Shooter USB Gamepad"
                price="$660"
                fiftyfive="(55)"
              />
              <ECommerceHomePageCart10
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                quiltedsatinjacOne="Quilted Satin Jacket"
                price="$660"
                fiftyfive="(55)"
              />
            </div>
          </div>
          <Button className="bg-red_600 cursor-pointer font-medium min-w-[234px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
            View All Products
          </Button>
        </div>
        <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <div className="flex flex-col gap-[20px] items-start justify-start self-stretch w-[auto]">
            <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_600 h-[40px] rounded-[4px] w-[19%]"></div>
              <Text
                className="font-semibold text-left text-red_600 w-[auto]"
                variant="body3"
              >
                Featured
              </Text>
            </div>
            <Text
              className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
              as="h4"
              variant="h4"
            >
              New Arrival
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="bg-black_900 flex md:h-[511px] h-[600px] justify-end pt-[29px] sm:px-[20px] px-[29px] relative rounded-[4px] md:w-[100%] w-[49%]">
              <Img
                src="images/img_ps5slimgoedko.png"
                className="h-[511px] mt-[auto] mx-[auto] object-cover w-[511px]"
                alt="ps5slimgoedko"
              />
              <div className="absolute bottom-[5%] flex flex-col gap-[16px] items-start justify-start left-[6%] self-stretch w-[auto]">
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    PlayStation 5
                  </Text>
                  <Text
                    className="font-normal font-poppins leading-[21.00px] md:max-w-[100%] max-w-[242px] not-italic text-gray_50 text-left"
                    variant="body5"
                  >
                    Black and White version of the PS5 coming out on sale.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    Shop Now
                  </Text>
                  <Img
                    src="images/img_underline_white_a700.svg"
                    className="h-[1px] w-[81px]"
                    alt="underline_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="bg-black_901 h-[284px] sm:pl-[20px] pl-[24px] relative rounded-[4px] w-[100%]">
                <Img
                  src="images/img_attractivewoma.png"
                  className="absolute h-[284px] inset-y-[0] my-[auto] object-cover right-[0] w-[76%]"
                  alt="attractivewoma"
                />
                <div className="absolute bottom-[8%] flex flex-col gap-[16px] items-start justify-start left-[8%] self-stretch w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Women’s Collections
                    </Text>
                    <Text
                      className="font-normal font-poppins leading-[21.00px] md:max-w-[100%] max-w-[255px] not-italic text-gray_50 text-left"
                      variant="body5"
                    >
                      Featured woman collections that give you another vibe.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Shop Now
                    </Text>
                    <Img
                      src="images/img_underline_white_a700.svg"
                      className="h-[1px] w-[81px]"
                      alt="underline_Two"
                    />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center self-stretch sm:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-black_900 md:h-[222px] h-[284px] p-[24px] sm:px-[20px] relative rounded-[4px] w-[100%]">
                  <div className="absolute h-[222px] inset-[0] justify-center m-[auto] w-[78%]">
                    <div className="backdrop-opacity-[0.5] bg-bluegray_100_e5 blur-[300.00px] h-[196px] m-[auto] rounded-[50%] w-[196px]"></div>
                    <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_69694768amazo.png"
                        className="h-[221px] md:h-[auto] object-cover w-[91%]"
                        alt="69694768amazo"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex flex-col gap-[8px] items-start justify-start left-[8%] self-stretch w-[auto]">
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Speakers
                      </Text>
                      <Text
                        className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                        variant="body5"
                      >
                        Amazon wireless speakers
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Shop Now
                      </Text>
                      <Img
                        src="images/img_underline_white_a700.svg"
                        className="h-[1px] w-[81px]"
                        alt="underline"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-black_900 md:h-[238px] h-[284px] p-[16px] relative rounded-[4px] w-[100%]">
                  <div className="h-[238px] m-[auto] w-[238px]">
                    <div className="backdrop-opacity-[0.5] bg-bluegray_100_e5 blur-[300.00px] h-[238px] m-[auto] rounded-[50%] w-[238px]"></div>
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[4px] w-[89%]">
                      <Img
                        src="images/img_652e82cd70aa652.png"
                        className="h-[203px] md:h-[auto] mb-[7px] mt-[4px] object-cover w-[100%]"
                        alt="652e82cd70aa652"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[23%] flex flex-col gap-[8px] items-start justify-start left-[9%] self-stretch w-[auto]">
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Perfume
                      </Text>
                      <Text
                        className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                        variant="body5"
                      >
                        GUCCI INTENSE OUD EDP
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Shop Now
                      </Text>
                      <Img
                        src="images/img_underline_white_a700.svg"
                        className="h-[1px] w-[81px]"
                        alt="underline"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <ECommerceHomePageListcut
          className="sm:flex-col flex-row font-poppins grid grid-cols-1 justify-center max-w-[943px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
          price="FREE AND FAST DELIVERY"
          priceOne="Free delivery for all orders over $140"
          p247CustomerservOne="24/7 CUSTOMER SERVICE"
          friendly247CustOne="Friendly 24/7 customer support"
          moneybackguaranOne="MONEY BACK GUARANTEE"
          duration="We reurn money within 30 days"
        />
        <div className="flex items-end mt-[61px] md:px-[20px] px-[254px] w-[100%]">
          <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rotate-[90deg] rounded-[50%] w-[46px]">
            <Img
              src="images/img_arrowup.svg"
              className="h-[24px]"
              alt="arrowup"
            />
          </Button>
        </div>
        <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[32px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default AccountDropdownWithaccountPage;
