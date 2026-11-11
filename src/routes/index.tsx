import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import kitchenCombo2 from "@/assets/site-import/kitchen-combo2.png.asset.json";
import kitchenCombo3 from "@/assets/site-import/kitchen-combo3.png.asset.json";
import kitchenCombo4 from "@/assets/site-import/kitchen-combo4.png.asset.json";

import capturedCSS from "../styles/site.css?raw";

const productImages = [
  "/site-assets/48875f566ad95a62.png",
  kitchenCombo2.url,
  kitchenCombo3.url,
  kitchenCombo4.url,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Defy Microwave + Russell Hobbs Air Fryer + Mellerware Kettle — Kitchen Combo" },
      {
        name: "description",
        content:
          "Shop the Defy microwave, Russell Hobbs air fryer, and Mellerware glass kettle kitchen combo.",
      },
      {
        property: "og:title",
        content: "Defy Microwave + Russell Hobbs Air Fryer + Mellerware Kettle — Kitchen Combo",
      },
      {
        property: "og:description",
        content:
          "Shop the Defy microwave, Russell Hobbs air fryer, and Mellerware glass kettle kitchen combo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "pt" }, body: {  } } },
  component: Index,
});

function Index() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [productInfoOpen, setProductInfoOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  useEffect(() => {
    if (!imageModalOpen && !productInfoOpen && !reviewsOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setImageModalOpen(false);
      setProductInfoOpen(false);
      setReviewsOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [imageModalOpen, productInfoOpen, reviewsOpen]);

  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-(\x2d-blue) flex gap-[8px] justify-center py-[8px] px-[12px] relative z-1001"}>
        <svg className="flex-none h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span className="text-white text-[13px] font-bold tracking-[0.3px]">Daily Deal - ends in</span>
        <span className="text-white text-[13px] font-extrabold ml-[2px] [font-variant-numeric:tabular-nums]" id="ddTimer">02:23:34</span>
      </div>
      <ImportedHeaderTopBar />
      <div className="wrap pb-0!">
        <ImportedSectionProductHero
          activeImageIndex={activeImageIndex}
          onSelectImage={setActiveImageIndex}
          onExpand={() => setImageModalOpen(true)}
        />
        <section className="mb-0! min-h-auto! pt-[10px] pr-[12px] pb-0 pl-[12px] pb-[6px]! [border-top:1px_solid_rgb(242,242,242)]" aria-label="Product info">
          <div className="items-start flex gap-[12px] justify-between">
            <h1 className="text-[24px] font-medium leading-[1.15] m-0">Defy 30L Microwave + Russell Hobbs 6.5L Air Fryer + Mellerware Glass Kettle</h1>
            <button className={"share-btn items-center \x62order \x62order-solid \x62order-[#\x30000001a] rounded-[999px] cursor-pointer inline-flex flex-none h-[34px] justify-center mt-[2px] w-[34px]"} aria-label="Share">
              <svg className={"\x74ext-[#\x3333333] h-[18px] w-[18px]"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="2" />
                <circle cx="6" cy="12" r="2" />
                <circle cx="18" cy="19" r="2" />
                <path d="M8 12l8-6" />
                <path d="M8 12l8 6" />
              </svg>
            </button>
          </div>
          <p className="text-(--muted) text-[14px] mt-[4px]! mr-0! mb-[6px]! ml-0!">Defy · Russell Hobbs · Mellerware</p>
          <div className={"items-center \x74ext-[#\x6576f00] flex text-[13px] font-semibold gap-[6px] pt-[4px] pr-0 pb-[2px] pl-0"}>
            <svg className="flex-none h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span id="demandText">In high demand - <strong>56 people</strong> have this in their cart</span>
          </div>
          <div className="items-center flex text-[14px] gap-[8px] m-0! p-0!" aria-label="Rating and reviews">
            <svg className={"\x74ext-[#\x664b400] flex-none h-[16px] w-[16px]"} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.76 1.64 7.03z" />
            </svg>
            <strong className="font-bold">4.6</strong>
            <a className="text-(--blue) font-medium no-underline" aria-label="Reviews link" href="#">3564 Reviews</a>
            <span className="text-(--muted) text-[13px] font-medium ml-[6px]">1,200+ sold</span>
          </div>
        </section>
      </div>
      <ImportedSectionPriceAndDelivery />
      <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x74ext-[#\x6362828] text-[13px] font-semibold pt-[6px] pr-[12px] pb-0 pl-[12px]"}>Only 4 left at this price</div>
      <ImportedSection />
      <ImportedSectionStockAndDeliveryInformation />
      <ImportedSectionDescription
        expanded={descriptionExpanded}
        onToggle={() => setDescriptionExpanded((expanded) => !expanded)}
      />
      <div className="desc-fade hidden" id="descFade" />
      <ImportedSectionProductInformation
        expanded={productInfoOpen}
        onToggle={() => setProductInfoOpen((open) => !open)}
      />
      <div className={`bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00000073] inset-0 fixed z-2200 ${productInfoOpen ? "block" : "hidden"}`} id="piModal" aria-hidden={!productInfoOpen}>
        <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white inset-0 overflow-hidden absolute" role="dialog" aria-modal="true" aria-label="Product Information">
          <div className="items-center grid grid-cols-[56px_1fr_56px] h-[56px] py-0 px-[6px] [border-bottom:1px_solid_rgb(232,232,232)]">
            <button className={"pi-close \x62order-0 rounded-[999px] cursor-pointer text-[22px] h-[44px] ml-[6px] w-[44px]"} id="piClose" type="button" aria-label="Close" onClick={() => setProductInfoOpen(false)}>✕</button>
            <div className="text-site-import-foreground text-[18px] font-semibold text-center">Product Information</div>
            <div className="h-px w-[56px]" aria-hidden="true" />
          </div>
          <div className="h-[calc(100%_-_56px)] overflow-auto pt-0 pr-0 pb-[18px] pl-0">
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-site-import-border rounded-none overflow-hidden [border-left:0px]! [border-right:0px]!"}>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:0px]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Categories</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}><a className="text-site-import-primary font-semibold no-underline" href="#">Home &amp; Kitchen</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Appliances</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Small Kitchen Appliances</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Appliance Combos</a></div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Brand</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}><a className="text-site-import-primary font-semibold no-underline" href="#">Defy</a> / <a className="text-site-import-primary font-semibold no-underline" href="#">Russell Hobbs</a> / <a className="text-site-import-primary font-semibold no-underline" href="#">Mellerware</a></div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Microwave Capacity</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>30 L</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Air Fryer Capacity</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>6.5 L</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Kettle Capacity</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>1.7 L</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Total Power</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>1000 W · 1700 W · 2200 W</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Voltage</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>220–240 V</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Warranty</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>6-month limited warranty</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Material</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>Stainless steel · Glass · Plastic</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Colour</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>Stainless Steel / Black / Grey</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Control Type</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>Digital Touch</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Use</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>Everyday Kitchen Cooking</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>What's in the box</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>x 1 Defy 30L Digital Microwave<br />x 1 Russell Hobbs 6.5L Digital Air Fryer<br />x 1 Mellerware 1.7L Glass Kettle<br />x 1 Microwave Glass Turntable Plate<br />x 3 User Manuals</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Merchandising Tags</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>
                  <a className="text-site-import-primary font-semibold no-underline" href="#">Top Picks</a>
                </div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Pack Contents</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>3 appliances</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Cleaning</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>Dishwasher-safe air fryer basket</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Weight</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>22 kg (combined)</div>
              </div>
              <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
                <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Barcode</div>
                <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>6009812440371</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImportedSectionReviewsPreview onOpen={() => setReviewsOpen(true)} />
      <div className={`bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white inset-0 fixed z-2300 ${reviewsOpen ? "block" : "hidden"}`} id="rvPage" aria-hidden={!reviewsOpen}>
        <div className="items-center grid grid-cols-[56px_1fr_56px] h-[56px] py-0 px-[6px] [border-bottom:1px_solid_rgb(232,232,232)]">
          <button className={"rv-back \x62order-0 rounded-[999px] cursor-pointer text-[22px] h-[44px] ml-[6px] w-[44px]"} id="rvClose" aria-label="Back" onClick={() => setReviewsOpen(false)}>←</button>
          <div className="text-site-import-foreground text-[18px] font-semibold text-center">Defy 30L MW + RH Air Fryer...</div>
          <div className="h-px w-[56px]" />
        </div>
        <div className="items-center flex gap-[10px] justify-between pt-[14px] pr-[12px] pb-[6px] pl-[12px]">
          <div>
            <div className={"\x74ext-[#\x34a4a4a] text-[64px] font-semibold tracking-[-1px] leading-none"}>4.6</div>
          </div>
          <div>
            <div className={"\x74ext-[#\x664b400] text-[20px] tracking-[2px] whitespace-nowrap"} aria-label="Stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className={"\x74ext-[#\x649d9d9]"}>★</span>
            </div>
          </div>
          <div>
            <div className={"\x74ext-[#\x3555555] text-[16px] font-semibold whitespace-nowrap"}>3564 Reviews</div>
          </div>
        </div>
        <div className="pt-0 pr-[12px] pb-[10px] pl-[12px]">
          <div className="items-center grid gap-[10px] grid-cols-[34px_1fr_52px] py-[6px] px-0">
            <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}>5 <span className={"\x74ext-[#\x664b400]"}>★</span></div>
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x659e9e9] rounded-[999px] h-[10px] overflow-hidden"}>
              <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x30a9a2a] rounded-[999px] h-full w-[78%]"} />
            </div>
            <div className={"\x74ext-[#\x3444444] text-[14px] font-semibold text-right"}>2624</div>
          </div>
          <div className="items-center grid gap-[10px] grid-cols-[34px_1fr_52px] py-[6px] px-0">
            <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}>4 <span className={"\x74ext-[#\x664b400]"}>★</span></div>
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x659e9e9] rounded-[999px] h-[10px] overflow-hidden"}>
              <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x37ac400] rounded-[999px] h-full w-[15%]"} />
            </div>
            <div className={"\x74ext-[#\x3444444] text-[14px] font-semibold text-right"}>685</div>
          </div>
          <div className="items-center grid gap-[10px] grid-cols-[34px_1fr_52px] py-[6px] px-0">
            <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}>3 <span className={"\x74ext-[#\x664b400]"}>★</span></div>
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x659e9e9] rounded-[999px] h-[10px] overflow-hidden"}>
              <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x664b400] rounded-[999px] h-full w-[5%]"} />
            </div>
            <div className={"\x74ext-[#\x3444444] text-[14px] font-semibold text-right"}>104</div>
          </div>
          <div className="items-center grid gap-[10px] grid-cols-[34px_1fr_52px] py-[6px] px-0">
            <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}>2 <span className={"\x74ext-[#\x664b400]"}>★</span></div>
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x659e9e9] rounded-[999px] h-[10px] overflow-hidden"}>
              <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x6639c12] rounded-[999px] h-full w-[3%]"} />
            </div>
            <div className={"\x74ext-[#\x3444444] text-[14px] font-semibold text-right"}>40</div>
          </div>
          <div className="items-center grid gap-[10px] grid-cols-[34px_1fr_52px] py-[6px] px-0">
            <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}>1 <span className={"\x74ext-[#\x664b400]"}>★</span></div>
            <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x659e9e9] rounded-[999px] h-[10px] overflow-hidden"}>
              <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x6574c3c] rounded-[999px] h-full w-[6%]"} />
            </div>
            <div className={"\x74ext-[#\x3444444] text-[14px] font-semibold text-right"}>111</div>
          </div>
          <a className="text-site-import-primary block font-semibold mt-[10px] text-right no-underline" href="#">Write Review</a>
        </div>
        <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white grid gap-[12px] grid-cols-[1fr_1fr] py-[10px] px-[12px] [border-bottom:1px_solid_rgb(239,239,239)] [border-top:1px_solid_rgb(239,239,239)]">
          <button className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-muted \x62order-0 rounded-[2px] \x74ext-[#\x3555555] cursor-pointer text-[16px] font-semibold h-[44px]"}>Sort</button>
          <button className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-muted \x62order-0 rounded-[2px] \x74ext-[#\x3555555] cursor-pointer text-[16px] font-semibold h-[44px]"}>Filter</button>
        </div>
        <div className="h-[calc(100%_-_256px)] overflow-auto p-[12px]" aria-label="Reviews list">
          <div className="py-[14px] px-0 [border-bottom:1px_solid_rgb(239,239,239)]">
            <div className={"\x74ext-[#\x664b400] text-[18px] tracking-[2px] mb-[8px]"}>★★★★★</div>
            <div className={"\x74ext-[#\x3222222] text-[16px] mb-[4px]"}><strong>Refilwe</strong> - 09 Aug 2021</div>
            <div className={"\x74ext-[#\x3888888] text-[14px] italic mb-[10px]"}>(Reviewed on day of purchase)</div>
            <div className={"\x74ext-[#\x3333333] text-[15px] leading-[1.45]"}>This combo is exactly what I needed for my new place. The microwave is roomy, the air fryer cooks chips perfectly crispy without oil, and the glass kettle boils in under two minutes. Amazing value for three appliances.</div>
          </div>
          <div className="py-[14px] px-0 [border-bottom:1px_solid_rgb(239,239,239)]">
            <div className={"\x74ext-[#\x664b400] text-[18px] tracking-[2px] mb-[8px]"}>★★★★★</div>
            <div className={"\x74ext-[#\x3222222] text-[16px] mb-[4px]"}><strong>Nomsa Mkhize</strong> - 27 Sep 2021</div>
            <div className={"\x74ext-[#\x3888888] text-[14px] italic mb-[10px]"}>(Reviewed 15 days after purchase)</div>
            <div className={"\x74ext-[#\x3333333] text-[15px] leading-[1.45]"}>Don't wait. Perfect.<br /><br />One of the best buys I've made. The air fryer has replaced my oven for most meals, the microwave heats evenly, and the kettle with the blue light looks beautiful on the counter. Highly recommended for anyone setting up a kitchen.</div>
          </div>
          <div className="py-[14px] px-0 [border-bottom:1px_solid_rgb(239,239,239)]">
            <div className={"\x74ext-[#\x664b400] text-[18px] tracking-[2px] mb-[8px]"}>★★★★★</div>
            <div className={"\x74ext-[#\x3222222] text-[16px] mb-[4px]"}><strong>Robynn</strong> - 29 May 2023</div>
            <div className={"\x74ext-[#\x3888888] text-[14px] italic mb-[10px]"}>(Reviewed 7 days after purchase)</div>
            <div className={"\x74ext-[#\x3333333] text-[15px] leading-[1.45]"}>Perfect, ideal for a family kitchen<br /><br />Very good quality appliances. Buying the microwave, air fryer and kettle together saved me a lot of money, and they all match so the kitchen looks tidy. Great value for a complete bundle.</div>
          </div>
          <div className="py-[14px] px-0 [border-bottom:1px_solid_rgb(239,239,239)]">
            <div className={"\x74ext-[#\x664b400] text-[18px] tracking-[2px] mb-[8px]"}>★★★★★</div>
            <div className={"\x74ext-[#\x3222222] text-[16px] mb-[4px]"}><strong>Lize</strong> - 26 Jun 2023</div>
            <div className={"\x74ext-[#\x3888888] text-[14px] italic mb-[10px]"}>(Reviewed 14 days after purchase)</div>
            <div className={"\x74ext-[#\x3333333] text-[15px] leading-[1.45]"}>I really like this combo. Everything is simple to use and does exactly what it promises. The air fryer for supper and the kettle for morning coffee have become part of my daily routine. Great results.</div>
          </div>
        </div>
      </div>
      <footer className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white bottom-0 left-0 pt-[10px] pr-[12px] pb-[14px] pl-[12px] fixed right-0 z-1000 [border-top:1px_solid_var(--border)]" aria-label="Bottom action bar">
        <div className="items-center flex gap-[12px]">
          <button className="items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white rounded-[999px] cursor-pointer flex flex-none gap-[8px] h-[52px] justify-center w-[64px] [border:2px_solid_var(--danger)]" aria-label="Add to wishlist">{"\n        "}<span className="text-(--danger) text-[22px] font-bold leading-none -mt-px">+</span>{"\n        "}<svg className="text-(--danger) h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{"\n          "}<path d="M20.8 4.6c-1.5-1.5-3.9-1.5-5.4 0L12 8l-3.4-3.4c-1.5-1.5-3.9-1.5-5.4 0s-1.5 3.9 0 5.4L12 21l8.8-11c1.5-1.5 1.5-3.9 0-5.4z" />{"\n        "}</svg>{"\n      "}</button>
          <a className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-(\x2d-green) \x62order-0 rounded-[999px] text-white cursor-pointer flex flex-1 text-[16px] font-semibold gap-[10px] h-[52px] justify-center no-underline"} aria-label="Add to Cart" href="https://home-and-business-address.lovable.app">{"\n  "}<svg className="text-white h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{"\n    "}<path d="M6 6h15l-2 9H7L6 6Z" />{"\n    "}<path d="M6 6l-2-2H2" />{"\n    "}<circle cx="9" cy="20" r="1" />{"\n    "}<circle cx="18" cy="20" r="1" />{"\n  "}</svg>Add to Cart</a>
        </div>
      </footer>
      <div className={`items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#000000db] inset-0 justify-center p-[18px] fixed z-2000 ${imageModalOpen ? "flex" : "hidden"}`} id="modal" aria-hidden={!imageModalOpen} role="dialog" aria-modal="true" aria-label="Expanded product image" onClick={() => setImageModalOpen(false)}>
        <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x300000033] \x62order \x62order-solid \x62order-[#\x66fffff40] rounded-[999px] text-white cursor-pointer flex text-[18px] h-[40px] justify-center absolute right-[14px] top-[14px] w-[40px]"} id="modalClose" aria-label="Close" onClick={() => setImageModalOpen(false)}>✕</button>
        <img className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent block max-h-[90vh] max-w-[520px] object-contain w-full" id="modalImg" src={productImages[activeImageIndex] ?? productImages[0]} alt="Expanded product image" onClick={(event) => event.stopPropagation()} />
      </div>
      <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white py-[8px] px-0 w-full [border-top:1px_solid_rgb(232,232,232)]">
        <img className="block h-auto my-0 mx-auto max-w-[420px] w-full" src="/site-assets/979324ffbfacdc45.png" alt="takealot.credit shop now pay later" loading="lazy" />
      </div>
    </>
  );
}

function ImportedHeaderTopBar() {
  return (
    <header className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-(\x2d-bg) flex \x68-(\x2d-topbar-height) justify-between py-0 px-[12px] sticky top-0 z-999 [border-bottom:1px_solid_var(--border)]"} aria-label="Top Bar">
      <div className="items-center flex gap-[14px] min-w-[72px]">
        <button className={"icon-btn items-center \x62order-0 rounded-[999px] cursor-pointer inline-flex h-[28px] justify-center p-0 w-[28px]"} aria-label="Menu">
          <svg className="text-site-import-foreground block h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="items-center flex flex-1 justify-center pointer-events-none [transform:translateY(-1px)]" aria-label="Takealot logo">
        <img className="block h-[28px] object-contain pointer-events-none w-auto" src="/site-assets/4120ca8eb4fa0100.png" alt="takealot.com" />
      </div>
      <div className="items-center flex gap-[14px] min-w-[72px]">
        <button className={"icon-btn items-center \x62order-0 rounded-[999px] cursor-pointer inline-flex h-[28px] justify-center p-0 w-[28px]"} aria-label="Search">
          <svg className="text-site-import-foreground block h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.2-3.2" />
          </svg>
        </button>
        <button className={"icon-btn items-center \x62order-0 rounded-[999px] cursor-pointer inline-flex h-[28px] justify-center p-0 w-[28px]"} aria-label="Cart">
          <svg className="text-site-import-foreground block h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-2 9H7L6 6Z" />
            <path d="M6 6l-2-2H2" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function ImportedSectionProductHero({
  activeImageIndex,
  onSelectImage,
  onExpand,
}: {
  activeImageIndex: number;
  onSelectImage: (index: number) => void;
  onExpand: () => void;
}) {
  return (
    <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white mb-0! pt-[12px] pr-[12px] pb-[8px] pl-[12px] relative" aria-label="Product hero">
      <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white rounded-[8px] overflow-hidden relative touch-pan-y w-full">
        <img className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white block h-[360px] object-contain select-none w-full [-webkit-user-drag:none]" id="productImage" src={productImages[activeImageIndex] ?? productImages[0]} alt={`Product image ${activeImageIndex + 1}`} />
        <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-(\x2d-blue) rounded-[6px] text-white text-[13px] font-bold left-[12px] leading-[1.05] p-[10px] absolute text-center top-[12px] w-[58px]"} aria-label="Discount badge">UP TO 65%<span className="block text-[12px] font-extrabold tracking-[0.2px] mt-[2px]">OFF</span></div>
        <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x66fffffe6] \x62order \x62order-solid \x62order-[#\x300000014] rounded-[999px] cursor-pointer flex h-[34px] justify-center absolute right-[12px] top-[12px] w-[34px]"} id="expandBtn" aria-label="Expand image" onClick={onExpand}>
          <svg className={"\x74ext-[#\x3222222] h-[18px] w-[18px]"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3H3v6" />
            <path d="M15 21h6v-6" />
            <path d="M21 9V3h-6" />
            <path d="M3 15v6h6" />
          </svg>
        </button>
      </div>
      <div className="items-center flex gap-[10px] justify-center pt-[10px] pr-0 pb-0 pl-0" aria-label="Image carousel indicators">
        {productImages.map((_, index) => (
          <button
            key={index}
            className={`bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] ${activeImageIndex === index ? "bg-(--blue)" : "bg-[#cfcfcf]"} border-0 rounded-[999px] cursor-pointer h-[10px] p-0 w-[10px]`}
            aria-label={`Image ${index + 1}`}
            aria-pressed={activeImageIndex === index}
            onClick={() => onSelectImage(index)}
          />
        ))}
      </div>
    </section>
  );
}

function ImportedSectionPriceAndDelivery() {
  return (
    <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white pt-[12px] pr-[12px] pb-0 pl-[12px]" aria-label="Price and delivery">
      <div className="pb-[12px] [border-bottom:1px_solid_rgb(239,239,239)]">
        <div>
          <div className="items-baseline flex gap-[6px]">
            <span className="text-site-import-foreground text-[22px] font-semibold tracking-[-0.4px] leading-none mr-[6px]">R</span>
            <span className="text-site-import-foreground text-[38px] font-semibold tracking-[-0.5px] leading-none">599</span>
          </div>
          <div className="items-center flex gap-[8px] mt-[4px]">
            <span className={"\x74ext-[#\x39a9a9a] text-[14px] font-semibold line-through"}>R1,697</span>
            <span className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x658f5e9] rounded-[4px] text-(--green) inline-block text-[13px] font-bold ml-[6px] py-[3px] px-[8px]"}>You save R1,098</span>
          </div>
          <div className="text-(--muted) text-[14px] font-medium mt-[2px]">or <strong className={"\x74ext-[#\x3333333] font-bold"}>R49/mo</strong> x 12 with takealot.credit</div>
          <div className="items-center flex text-[14px] gap-[8px] mt-[10px]">
            <span className={"muted \x74ext-[#\x38a8a8a] font-semibold"}>Estimated Delivery</span>
            <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[6px] \x74ext-[#\x3333333] inline-flex text-[12px] font-bold justify-center leading-[1.2] ml-0 py-[2px] px-[6px]"}>CPT</span>
            <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[6px] \x74ext-[#\x3333333] inline-flex text-[12px] font-bold justify-center leading-[1.2] ml-0 py-[2px] px-[6px]"}>DBN</span>
            <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[6px] \x74ext-[#\x3333333] inline-flex text-[12px] font-bold justify-center leading-[1.2] ml-0 py-[2px] px-[6px]"}>JHB</span>
          </div>
          <div>
            <span className="text-site-import-foreground text-[16px] font-semibold mt-[6px]" id="singleDeliveryRange">Get It Tomorrow!</span>
            <div className="text-(--green) text-[13px] font-semibold mt-[2px]" id="deliveryDeadline">Order within <strong className="font-bold">2h 23m</strong> for delivery tomorrow</div>
            <a className="text-site-import-primary inline-block text-[14px] font-semibold mt-[6px] no-underline" href="#">T&amp;Cs Apply</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection() {
  return (
    <section className="p-[12px]">
      <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-dashed \x62order-[#\x64cdcdc] rounded-[12px] py-[14px] px-[12px] text-center"}>
        <span className={"\x74ext-[#\x36a6a6a] text-[14px] font-bold tracking-[0.2px]"}>FREE DELIVERY WITH <strong className="text-site-import-primary font-extrabold">TAKEALOTMORE</strong>{"\n    "}</span>
      </div>
      <div className={"card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-site-import-muted rounded-[12px] [box-shadow:rgba(0,0,0,0.04)_0px_1px_0px] mb-[12px] py-[14px] px-[12px]"} aria-label="takealot credit">
        <div className="text-[22px] font-bold tracking-[-0.2px] mb-[8px]">
          <span className={"\x74ext-[#\x3333333]"}>takealot</span>
          <span className="text-site-import-primary">.</span>
          <span className={"\x74ext-[#\x3333333] font-bold"}>credit</span>
        </div>
        <p className={"\x74ext-[#\x3333333] text-[14px] leading-[1.45] mt-0 mr-0 mb-[12px] ml-0"}>Buy using <strong>takealot.credit</strong> for <strong>R 49</strong> p/m x <strong>12</strong><br />months and get <strong>1%</strong> of your purchase back*.</p>
        <div className="flex flex-col gap-[10px]">
          <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card rounded-[8px] \x74ext-[#\x3333333] text-[14px] font-bold py-[10px] px-[12px]"}>Get 3% with <span className="text-site-import-primary font-black ml-[6px]">takealot<span className={"\x74ext-[#\x66f3b30] font-black ml-[2px]"}>more</span></span></div>
          <a className="self-end text-site-import-primary text-[14px] font-bold no-underline" aria-label="More Credit Options" href="#">More Credit Options</a>
        </div>
      </div>
      <div className={"card items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-site-import-muted rounded-[12px] [box-shadow:rgba(0,0,0,0.04)_0px_1px_0px] flex gap-[10px] justify-between mb-[12px] py-[14px] px-[12px]"} aria-label="eBucks">
        <div className="items-center flex gap-[10px] min-w-0">
          <div className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x66f7a00] rounded-[999px] text-white flex flex-none font-black h-[34px] justify-center w-[34px]"}>eB</div>
          <div className={"\x74ext-[#\x3333333] text-[14px] font-bold whitespace-nowrap"}><span className={"\x74ext-[#\x66f7a00] font-black"}>e</span>Bucks</div>
        </div>
        <div className={"\x74ext-[#\x3333333] text-[14px] font-bold whitespace-nowrap"}>eB10,990</div>
      </div>
      <div className={"card items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-site-import-muted rounded-[12px] [box-shadow:rgba(0,0,0,0.04)_0px_1px_0px] flex gap-[10px] justify-between mb-[12px] py-[14px] px-[12px]"} aria-label="Discovery Miles">
        <div className="items-center flex gap-[10px] min-w-0">
          <div className={"items-center \x62order-2 \x62order-solid \x62order-[#\x6198b4a] rounded-[999px] \x74ext-[#\x6198b4a] flex flex-none font-black h-[34px] justify-center w-[34px]"}>D</div>
          <div className={"\x74ext-[#\x3333333] flex flex-col text-[14px] font-bold leading-[1.05] whitespace-nowrap"}>
            <span className={"\x74ext-[#\x34a6aa6] text-[11px] font-bold"}>Discovery</span>
            <span className={"\x74ext-[#\x31f3e7a] text-[14px] font-black tracking-[0.5px]"}>MILES</span>
          </div>
        </div>
        <div className={"\x74ext-[#\x3333333] text-[14px] font-bold whitespace-nowrap"}>10,990</div>
      </div>
    </section>
  );
}

function ImportedSectionStockAndDeliveryInformation() {
  return (
    <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white p-[12px] [border-top:1px_solid_rgb(240,240,240)]" aria-label="Stock and delivery information">
      <div className="items-baseline flex flex-wrap gap-[10px] mb-[10px]">
        <div className="text-site-import-foreground text-[20px] font-bold tracking-[-0.2px]">In stock</div>
        <div className="items-center flex gap-[6px]" aria-label="Regions">
          <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[4px] \x74ext-[#\x3333333] inline-flex text-[11px] font-extrabold h-[18px] justify-center tracking-[0.2px] leading-[18px] py-0 px-[6px]"}>CPT</span>
          <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[4px] \x74ext-[#\x3333333] inline-flex text-[11px] font-extrabold h-[18px] justify-center tracking-[0.2px] leading-[18px] py-0 px-[6px]"}>DBN</span>
          <span className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x62order \x62order-solid \x62order-site-import-border rounded-[4px] \x74ext-[#\x3333333] inline-flex text-[11px] font-extrabold h-[18px] justify-center tracking-[0.2px] leading-[18px] py-0 px-[6px]"}>JHB</span>
        </div>
        <a className="text-site-import-primary text-[14px] font-extrabold ml-auto no-underline whitespace-nowrap" aria-label="Learn more" href="#">Learn More</a>
      </div>
      <ul className="list-none m-0 p-0">
        <li className="items-center grid gap-[10px] grid-cols-[26px_1fr_22px] py-[12px] px-0 [border-top:0px]">
          <span className="items-center text-site-import-muted-foreground flex h-[26px] justify-center w-[26px]" aria-hidden="true">
            <svg className={"block \x66ill-current h-[22px] stroke-none w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"} viewBox="0 0 24 24">
              <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.76 1.64 7.03z" />
            </svg>
          </span>
          <span className={"\x74ext-[#\x3333333] text-[14px] leading-[1.35]"}>Eligible for next-day delivery or collection.</span>
          <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-accent \x62order-0 rounded-[999px] cursor-pointer flex h-[20px] justify-center p-0 w-[20px]"} type="button" aria-label="More info">
            <span className="text-white text-[12px] font-black leading-none [transform:translateY(-0.5px)]">i</span>
          </button>
        </li>
        <li className="items-center grid gap-[10px] grid-cols-[26px_1fr_22px] py-[12px] px-0 [border-top:1px_solid_rgb(233,233,233)]">
          <span className="items-center text-site-import-muted-foreground flex h-[26px] justify-center w-[26px]" aria-hidden="true">
            <svg className={"block fill-none h-[22px] \x73troke-current w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"} viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="10" rx="2" />
              <circle cx="12" cy="12" r="2.2" />
              <path d="M6.5 9.5h0M17.5 14.5h0" />
            </svg>
          </span>
          <span className={"\x74ext-[#\x3333333] text-[14px] leading-[1.35]"}>Eligible for Cash on Delivery.</span>
          <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-accent \x62order-0 rounded-[999px] cursor-pointer flex h-[20px] justify-center p-0 w-[20px]"} type="button" aria-label="More info">
            <span className="text-white text-[12px] font-black leading-none [transform:translateY(-0.5px)]">i</span>
          </button>
        </li>
        <li className="items-center grid gap-[10px] grid-cols-[26px_1fr_22px] py-[12px] px-0 [border-top:1px_solid_rgb(233,233,233)]">
          <span className="items-center text-site-import-muted-foreground flex h-[26px] justify-center w-[26px]" aria-hidden="true">
            <svg className={"block fill-none h-[22px] \x73troke-current w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"} viewBox="0 0 24 24">
              <path d="M3 7h11v10H3z" />
              <path d="M14 10h4l3 3v4h-7z" />
              <circle cx="7" cy="19" r="1.4" />
              <circle cx="18" cy="19" r="1.4" />
            </svg>
          </span>
          <span className={"\x74ext-[#\x3333333] text-[14px] leading-[1.35]"}>Free Delivery Available.</span>
          <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-accent \x62order-0 rounded-[999px] cursor-pointer flex h-[20px] justify-center p-0 w-[20px]"} type="button" aria-label="More info">
            <span className="text-white text-[12px] font-black leading-none [transform:translateY(-0.5px)]">i</span>
          </button>
        </li>
        <li className="items-center grid gap-[10px] grid-cols-[26px_1fr_22px] py-[12px] px-0 [border-top:1px_solid_rgb(233,233,233)]">
          <span className="items-center text-site-import-muted-foreground flex h-[26px] justify-center w-[26px]" aria-hidden="true">
            <svg className={"block fill-none h-[22px] \x73troke-current w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"} viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 0 1 15-6" />
              <path d="M18 6v6h-6" />
              <path d="M21 12a9 9 0 0 1-15 6" />
              <path d="M6 18v-6h6" />
            </svg>
          </span>
          <span className={"\x74ext-[#\x3333333] text-[14px] leading-[1.35]"}>Hassle-Free Exchanges &amp; Returns for 30 Days.</span>
          <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-accent \x62order-0 rounded-[999px] cursor-pointer flex h-[20px] justify-center p-0 w-[20px]"} type="button" aria-label="More info">
            <span className="text-white text-[12px] font-black leading-none [transform:translateY(-0.5px)]">i</span>
          </button>
        </li>
        <li className="items-center grid gap-[10px] grid-cols-[26px_1fr_22px] py-[12px] px-0 [border-bottom:1px_solid_rgb(233,233,233)] [border-top:1px_solid_rgb(233,233,233)]">
          <span className="items-center text-site-import-muted-foreground flex h-[26px] justify-center w-[26px]" aria-hidden="true">
            <svg className={"block fill-none h-[22px] \x73troke-current w-[22px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"} viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4" />
              <path d="M3 10h18" />
            </svg>
          </span>
          <span className={"\x74ext-[#\x3333333] text-[14px] leading-[1.35]"}>6-Month Limited Warranty.</span>
          <button className={"items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-accent \x62order-0 rounded-[999px] cursor-pointer flex h-[20px] justify-center p-0 w-[20px]"} type="button" aria-label="More info">
            <span className="text-white text-[12px] font-black leading-none [transform:translateY(-0.5px)]">i</span>
          </button>
        </li>
      </ul>
    </section>
  );
}

function ImportedSectionDescription({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <section className="pt-[6px] pr-[12px] pb-0 pl-[12px] [border-top:1px_solid_rgb(240,240,240)]" aria-label="Description">
      <h2 className="text-site-import-foreground text-[18px] font-semibold mt-[16px] mr-0 mb-[10px] ml-0">Description</h2>
      <div className={`desc-box relative ${expanded ? "" : "is-collapsed"}`} id="descBox">
        <div className={`\x74ext-[#\x3333333] text-[14px] leading-normal overflow-hidden ${expanded ? "" : "max-h-[210px]"}`} id="descContent">
          <p>Upgrade your kitchen with this ultimate 3-in-1 appliance combo. The Defy 30L Digital Microwave offers spacious capacity with digital touch controls for precise cooking, the Russell Hobbs 6.5L Digital Air Fryer lets you enjoy crispy, oil-free meals with ease, and the Mellerware 1.7L Glass Kettle boils water in under two minutes with a stunning blue LED light. Together, they cover every everyday kitchen need at unbeatable value.</p>
          <p className="text-site-import-foreground font-semibold mt-[12px] mr-0 mb-[6px] ml-0">Defy 30L Digital Microwave:</p>
          <ul className="mt-0 mr-0 mb-[8px] ml-0 pl-[18px]">
            <li>30 Litre capacity.</li>
            <li>Digital touch control panel.</li>
            <li>Multiple power levels.</li>
            <li>Defrost by time or weight.</li>
            <li>Auto cook menus.</li>
            <li>Child lock safety feature.</li>
            <li>Glass turntable plate included.</li>
            <li>Power: 1000 W.</li>
          </ul>
          <p className="text-site-import-foreground font-semibold mt-[12px] mr-0 mb-[6px] ml-0">Russell Hobbs 6.5L Digital Air Fryer:</p>
          <ul className="mt-0 mr-0 mb-[8px] ml-0 pl-[18px]">
            <li>6.5 Litre capacity.</li>
            <li>Digital touch screen controls.</li>
            <li>Adjustable temperature up to 200°C.</li>
            <li>60-minute timer with auto shut-off.</li>
            <li>Dishwasher-safe non-stick basket.</li>
            <li>Oil-free healthy cooking.</li>
            <li>Power: 1700 W.</li>
          </ul>
          <p className="text-site-import-foreground font-semibold mt-[12px] mr-0 mb-[6px] ml-0">Mellerware 1.7L Glass Kettle:</p>
          <ul className="mt-0 mr-0 mb-[8px] ml-0 pl-[18px]">
            <li>1.7 Litre capacity.</li>
            <li>Blue LED illumination.</li>
            <li>Boil-dry protection.</li>
            <li>360° cordless swivel base.</li>
            <li>Concealed stainless steel element.</li>
            <li>Auto shut-off.</li>
            <li>Power: 2200 W.</li>
          </ul>
          <p className="text-site-import-foreground font-semibold mt-[12px] mr-0 mb-[6px] ml-0">What's in the box</p>
          <p>x 1 Defy 30L Digital Microwave<br />x 1 Russell Hobbs 6.5L Digital Air Fryer<br />x 1 Mellerware 1.7L Glass Kettle<br />x 1 Microwave Glass Turntable Plate<br />x 3 User Manuals</p>
        </div>
        {expanded ? null : <div className="desc-fade" id="descFade" />}
      </div>
      <button className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-[#\x647d7d7] rounded-[999px] \x74ext-[#\x3222222] cursor-pointer text-[15px] font-bold h-[46px] mt-[12px] mr-0 mb-[16px] ml-0 w-full"} id="showMoreBtn" type="button" aria-expanded={expanded} aria-controls="descContent" onClick={onToggle}>{expanded ? "Show Less" : "Show More"}</button>
    </section>
  );
}

function ImportedSectionProductInformation({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white pt-[6px] pr-[12px] pb-0 pl-[12px] [border-top:1px_solid_rgb(240,240,240)]" aria-label="Product Information">
      <h2 className="text-site-import-foreground text-[18px] font-semibold mt-[16px] mr-0 mb-[10px] ml-0">Product Information</h2>
      <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-site-import-border rounded-none overflow-hidden"}>
        <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:0px]">
          <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Categories</div>
          <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}><a className="text-site-import-primary font-semibold no-underline" href="#">Home &amp; Kitchen</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Appliances</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Small Kitchen Appliances</a> /<br /><a className="text-site-import-primary font-semibold no-underline" href="#">Appliance Combos</a></div>
        </div>
        <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
          <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Brand</div>
          <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}><a className="text-site-import-primary font-semibold no-underline" href="#">Defy</a> / <a className="text-site-import-primary font-semibold no-underline" href="#">Russell Hobbs</a> / <a className="text-site-import-primary font-semibold no-underline" href="#">Mellerware</a></div>
        </div>
        <div className="grid grid-cols-[42%_58%] min-h-[44px] [border-top:1px_solid_rgb(224,224,224)]">
          <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-site-import-card \x74ext-[#\x3333333] text-[14px] font-semibold p-[12px]"}>Total Power</div>
          <div className={"\x74ext-[#\x3333333] text-[14px] p-[12px]"}>1000 W · 1700 W · 2200 W</div>
        </div>
      </div>
      <button className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white \x62order \x62order-solid \x62order-[#\x647d7d7] rounded-[999px] \x74ext-[#\x3222222] cursor-pointer text-[15px] font-semibold h-[46px] mt-[12px] mr-0 mb-[16px] ml-0 w-full"} id="piOpen" type="button" aria-expanded={expanded} aria-controls="piModal" onClick={onToggle}>Show More</button>
    </section>
  );
}

function ImportedSectionReviewsPreview({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white p-[12px] [border-top:1px_solid_rgb(240,240,240)]" aria-label="Reviews preview">
      <div className="items-center flex gap-[10px] justify-between mb-[10px]">
        <div className="text-site-import-foreground text-[18px] font-semibold">Reviews</div>
        <div className={"items-center \x74ext-[#\x3333333] flex text-[14px] gap-[8px] whitespace-nowrap"}>
          <span className={"\x74ext-[#\x664b400]"}>★</span>
          <span className="font-semibold">4.6</span>
          <span className={"\x74ext-[#\x36b6b6b] font-semibold"}>3564 reviews</span>
        </div>
      </div>
      <div className={"bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] \x62g-[#\x667f7f7] \x62order \x62order-solid \x62order-[#\x64cdcdc] rounded-[4px] p-[12px]"}>
        <div className="items-center flex gap-[10px] justify-between mb-[8px]">
          <div className={"\x74ext-[#\x3333333] text-[14px] font-semibold"}><strong>Refilwe</strong> - 09 Aug 2021</div>
          <div className={"items-center \x74ext-[#\x3333333] flex text-[13px] gap-[6px] whitespace-nowrap"}>
            <span className={"\x74ext-[#\x664b400]"}>★</span>
            <span className="font-semibold">5</span>
            <span>(</span>
            <span className="text-[12px] opacity-80">👍</span>
            <span className={"\x74ext-[#\x3666666] font-semibold"}>1133</span>
            <span>)</span>
          </div>
        </div>
        <div className={"\x74ext-[#\x3444444] text-[14px] leading-[1.4] mb-[8px]"}>This combo is exactly what I needed for my new place. The microwave is roomy, the air fryer cooks chips perfectly crispy without oil, and the glass kettle boils in under two minutes. Amazing value for three appliances.</div>
        <a className="text-site-import-primary text-[14px] font-semibold no-underline" href="#" id="rvOpenFromReadMore" onClick={(event) => { event.preventDefault(); onOpen(); }}>Read More</a>
      </div>
      <div className="flex justify-end pt-[8px]">
        <a className="text-site-import-primary text-[14px] font-semibold no-underline" href="#" id="rvOpenFromViewAll" onClick={(event) => { event.preventDefault(); onOpen(); }}>View All</a>
      </div>
    </section>
  );
}
