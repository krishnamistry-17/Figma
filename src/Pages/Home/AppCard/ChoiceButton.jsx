import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Appcard from "./Appcard";
import Appcard1 from "./Appcard1";
import Appcard2 from "./Appcard2";

const ChoiceButton = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const value = activeTab === 0 ? "Customer" : "Vendore";
  }, []);

  return (
    <div>
      <div className="flex-col justify-center items-center pt-[64px]">
        <div className="flex justify-center items-center">
          <Tabs>
            <div>
              <TabList
                className="flex bg-[#FFF3CC] justify-center  items-center text-center gap-8 max-w-[352px] py-[5px] rounded-r-4xl rounded-l-4xl 
              md:ml-[81px] sm:ml-[68px] ml-5"
              >
                <Tab selectedClassName="bg-[#FFC501] rounded-r-4xl rounded-l-4xl py-[13px] px-[20px]">
                  <button className="text-black font-medium text-[16px]">
                    Customer
                  </button>
                </Tab>
                <Tab selectedClassName="bg-[#FFC501] rounded-r-4xl rounded-l-4xl py-[13px] px-[20px]">
                  <button className="text-black font-medium text-[16px]">
                    Vendors
                  </button>
                </Tab>
                <Tab selectedClassName="bg-[#FFC501] rounded-r-4xl rounded-l-4xl py-[13px] px-[20px]">
                  <button className="text-black font-medium text-[16px]">
                    Riders
                  </button>
                </Tab>
              </TabList>
              <TabPanel>
                <Appcard />
              </TabPanel>
              <TabPanel>
                <Appcard1 />
              </TabPanel>
              <TabPanel>
                <Appcard2 />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ChoiceButton;
