const STORAGE_KEY = "daily-sheet-draft-v1";
const PRODUCT_STORAGE_KEY = "daily-sheet-products-v1";
const PRODUCT_CATALOG_OVERRIDE_KEY = "daily-sheet-product-catalog-v1";
const DATE_FIELD = "meta.date";
const DAY_FIELD = "meta.day";
const EXTRA_PAGE_ROW_COUNT = 47;
const PRODUCT_DATALIST_ID = "product-options";
const MAX_PRODUCT_SUGGESTIONS = 80;
const PRODUCT_CATALOG_SEED = [
  "TADPADTRI TY 170 GSM RAJ GOLD 12•15",
  "TADPADTRI TY 170 GSM RAJ GOLD 12•18",
  "TADPADTRI TY 170 GSM RAJ GOLD 15•18",
  "TADPADTRI TY 170 GSM RAJ GOLD 15•30",
  "TADPADTRI TY170 GSM RAJ GOLD 18•24",
  "TADPADTRI TY 170 GSM RAJ GOLD 18•30",
  "TADPADTRI TY 170 GSM RAJ GOLD 24•30",
  "TADPADTRI TY 170 GSM RAJ GOLD 30•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 12•9",
  "TADPADTRI TY 120 GSM RAJ GOLD 12•15",
  "TADPADTRI TY 120 GSM RAJ GOLD 12•18",
  "TADPADTRI TY 120 GSM RAJ GOLD 15•18",
  "TADPADTRI TY 120 GSM RAJ GOLD 15•24",
  "TADPADTRI TY 120 GSM RAJ GOLD 15•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 18•24",
  "TADPADTRI TY 120 GSM RAJ GOLD 18•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 21•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 24•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 30•30",
  "TADPADTRI TY 120 GSM RAJ GOLD 30•40",
  "TADPADTRI TY 120 GSM RAJ GOLD 30•50",
  "TADPADTRI TY 120 GSM RAJ GOLD 40•40",
  "TADPADTRI TY 120 GSM RAJ GOLD 60•60",
  "TADPADTRI TW 120 GSM RAJ GOLD 24•18",
  "TADPADTRI TW 120 GSM RAJ GOLD 12•15",
  "TADPADTRI TW 120 GSM RAJ GOLD 12•18",
  "TADPADTRI TW 120 GSM RAJ GOLD 15•18",
  "TADPADTRI TW 120 GSM RAJ GOLD 18•30",
  "TADPADTRI TW 120 GSM RAJ GOLD 30•24",
  "TADPADTRI TW 120 GSM RAJ GOLD 30•40",
  "TADPADTRI TB 170 GSM 24 CARAT 9•12",
  "TADPADTRI TB 170 GSM 24 CARAT 12•15",
  "TADPADTRI TB 170 GSM 24 CARAT 12•18",
  "TADPADTRI TB 170 GSM 24 CARAT 15•18",
  "TADPADTRI TB 170 GSM 24 CARAT 15•24",
  "TADPADTRI TB 170 GSM 24 CARAT 15•30",
  "TADPADTRI TB 170 GSM 24 CARAT 18•24",
  "TADPADTRI TB 170 GSM 24 CARAT 18•30",
  "TADPADTRI TB 170 GSM 24 CARAT 30•21",
  "TADPADTRI TB 170 GSM 24 CARAT 30•24",
  "TADPADTRI TB 170 GSM 24 CARAT 30•30",
  "TADPADTRI TB 170 GSM 24 CARAT 30•40",
  "TADPADTRI TB 170 GSM 24 CARAT 30•50",
  "TADPADTRI TG 200 GSM RAJ GOLD 18•24",
  "TADPADTRI TG 200 GSM RAJ GOLD 30•18",
  "TADPADTRI TG 200 GSM RAJ GOLD 30•24",
  "TADPADTRI TG 200 GSM RAJ GOLD 30•40",
  "TADPADTRI TG 200 GSM RAJ GOLD 36•18",
  "TADPADTRI TG 200 GSM RAJ GOLD 36•24",
  "PANNI 12FT",
  "PANNI 14FT",
  "PANNI 15FT",
  "PANNI 20FT",
  "PANNI 24FT",
  "KOREA 9•15",
  "KOREA 10•16",
  "KOREA 11•16",
  "KOREA 11•15",
  "KOREA 11•20",
  "KOREA 12•15",
  "KOREA 12•20",
  "KOREA 12•24",
  "KOREA 12•30",
  "KOREA 12•40",
  "KOREA 15•18",
  "KOREA 15•24",
  "KOREA 18•24",
  "KOREA 18•25",
  "KOREA 18•30",
  "KOREA 20•30",
  "KOREA 20•32",
  "TAKIYA RAJ GOLD 12•3",
  "TAKIYA RAJ GOLD 12•4",
  "TAKIYA RAJ GOLD 15•2.5",
  "TAKIYA RAJ GOLD 18•2",
  "TAKIYA RAJ GOLD 24•1.5",
  "TAKIYA KALASH 12•4.5",
  "TAKIYA KALASH 18•3",
  "TAKIYA KALASH 18•3 BLUE",
  "TAKIYA KALASH 12•4.5 BLUE",
  "TAKIYA KOREA 12FT",
  "TAKIYA KOREA 15FT",
  "TAKIYA KOREA 16FT",
  "TAKIYA KOREA 18FT",
  "TAKIYA KOREA 20FT",
  "TAKIYA KOREA 24FT",
  "TAKIYA VEER BLACK",
  "TAKIYA KOREA 30FT",
  "TADPADTRI TB 200 GSM RAJ GOLD 24•18",
  "TADPADTRI TB 200 GSM RAJ GOLD 30•24",
  "TADPADTRI TB 200 GSM RAJ GOLD 30•40",
  "TADPADTRI TB 200 GSM RAJ GOLD 30•36",
  "TADPADTRI TB 200 GSM RAJ GOLD 36•24",
  "TADPADTRI TY 170 GSM RAJ GOLD 12•9",
  "LD SHEET BLACK LD 12X2",
  "LD SHEET BLACK LD 12X3",
  "LD SHEET BLACK LD 12X5",
  "LD SHEET BLACK LD 18X0.75",
  "LD SHEET BLACK LD 18X1",
  "LD SHEET BLACK LD 18X2",
  "LD SHEET BLACK LD 18X3",
  "LD SHEET BLACK LD 24X1",
  "LD SHEET BLACK LD 24X0.75",
  "THREAD 1000 MTR.",
  "THREAD 1000 MTR.RED",
  "THREAD 1000 MTR.GREEN",
  "THREAD 2000 MTR.IMP",
  "THREAD 2000 MTR.IMP GREEN",
  "THREAD 2000 MTR.IMP RED",
  "THREAD 2000 MTR.IMP MULTICOLOUR",
  "THREAD 2000 MTR.GW3",
  "THREAD 210/4P/70",
  "GUM POWDER",
  "COLOUR PINK",
  "COLOUR RED",
  "COLOUR GREEN",
  "COLOUR YELLOW",
  "SUVA RUFA",
  "SUVA LIBRA",
  "SUVA REGULAR",
  "SUTLI J",
  "SUTLI S",
  "SUTLI 14/2",
  "SUTLI ATM",
  "SUTLI T",
  "SUTLI T1",
  "SUTLI J CHILLER",
  "SUTLI S CHILLER",
  "SUTLI T CHILLER",
  "PP SUTLI 500GM NIMRITI",
  "PP SUTLI 500GM BLACK DIAMOND",
  "PP SUTLI 500GM BLACK DIAMOND PATTI 1KG",
  "PP SUTLI 500GM BLACK DIAMOND PATTI 0.500GM",
  "PP SUTLI 500GM BLACK KOBRA 1KG",
  "PP SUTLI 500GM HONDA",
  "PP SUTLI 500GM NANO",
  "PP SUTLI 500GM KHUSHBOO",
  "PP SUTLI 500GM POLKING",
  "PP SUTLI 500GM BAFNA COLOUR",
  "PP SUTLI 500GM BAFNA WHITE",
  "PP SUTLI 500GM SHARDHHA",
  "PP SUTLI 500GM NAVRANG",
  "BARLE TWIN SUTLI KISAN/BANSI",
  "BARLE TWIN SUTLI KIVI RED",
  "BARLE TWIN SUTLI KIVI GREEN",
  "BARLE TWIN SUTLI KIVI GOLD",
  "BARLE TWIN SUTLI JALARAM RED",
  "BARLE TWIN SUTLI JALARAM GREEN",
  "BARLE TWIN SUTLI KAUSTRI",
  "BARLE TWIN SUTLI PRTC SUTLI",
  "BARLE TWIN SUTLI DARSHAN",
  "BARLE TWIN SUTLI DHARSHAN POUCH",
  "BARLE TWIN SUTLI BROWN SUTLI",
  "BARLE TWIN SUTLI BLACK",
  "BARLE TWIN SUTLI GANESH",
  "BARLE TWIN SUTLI MAHARAJA",
  "BARLE TWIN SUTLI SWASTIK WHITE",
  "BARLE TWIN SUTLI SWASTIK COLOUR",
  "BARLE TWIN SUTLI SHETKARI",
  "BARLE TWIN SUTLI KADAK SUTLI",
  "BOBIN KISAN/BANSI1KG",
  "BOBIN KISAN/BANSI 2KG",
  "BOBIN DHARSHAN 2KG",
  "LENO BAG RED MANGO HV 58GM",
  "LENO BAG RED MANGO BL 50GM PATTA",
  "LENO BAG RED MANGO BL 50 GM PLAIN",
  "LENO BAG RED MANGO LQ 48GM PATTA",
  "LENO BAG RED MANGO LQ 48GM PLAIN",
  "LENO BAG RED MANGO NR 36GM PATTA",
  "LENO BAG RED MANGO NR 36GM PLAIN",
  "LENO BAG RED BHAJAN 22•38",
  "LENO BAG RED BHAJAN EXPORT 45GM",
  "LENO BAG RED BHAJAN 28•42",
  "LENO BAG RED MANGO 20•31 LENO",
  "LENO BAG RED TIGER LENO",
  "LENO BAG RED MANGO PO 50",
  "LENO BAG RED MANGO PO 40",
  "LENO BAG RED KALASH LENO",
  "LENO BAG YELLOW MANGO 18•32 GREENTON",
  "LENO BAG YELLOW MANGO 18•22 GREEN TON",
  "JUMBO TADPATRI 32•36 JUMBO",
  "JUMBO TADPATRI 24•40 JUMBO",
  "TAPAD REPOL TAPAD",
  "TAPAD SAMSUNG TAPAD",
  "MURGHAS CEMPLAST",
  "MURGHAS BROWN",
  "MURGHAS BALAJI AGRO",
  "MURGHAS WHITE 1",
  "MURGHAS WHITE 2",
  "MURGHAS BLACK 5TON",
  "MURGHAS LINER LINER",
  "PP WHITE 12•18 HAND BAG",
  "PP WHITE 12•19 HAND BAG",
  "PP WHITE 15•20 HAND BAG",
  "PP WHITE 19•30 WHITE",
  "PP WHITE 22•36 WHITE",
  "PP WHITE 24•36 WHITE",
  "PP WHITE 24•46 WHITE",
  "PP WHITE 28•48 WHITE",
  "PP WHITE 30•45 WHITE",
  "PP WHITE 30•50 WHITE",
  "PP WHITE 36•56 PATTA",
  "PP WHITE 36•40 WHITE",
  "PP WHITE 44•60 WHITE",
  "PP WHITE 19•30 PANI COLOUR",
  "PP WHITE 24•36 PANI COLOUR",
  "PP MULTI COLOUR 19•30 MULTI",
  "PP MULTI COLOUR 24•36 MULTI",
  "PP MULTI COLOUR 28•47 MULTI",
  "PP MULTI COLOUR 30•50 MULTI",
  "PP MULTI COLOUR 36•56 MULTI",
  "PP BLACK 24*38 BLACK",
  "PP BLACK 28•48 BLACK",
  "PP FERTILIZER UJWALA 72GM",
  "PP FERTILIZER UJWALA AA",
  "PP FERTILIZER UJWALA NEEM",
  "PP FERTILIZER UJWALA YELLOW",
  "PP FERTILIZER UJWALA LAMINATION",
  "PP FERTILIZER UJWALA ORIGINAL",
  "PP FERTILIZER IFFCO",
  "PP FERTILIZER IPL",
  "PP FERTILIZER KRIBCO GREEN",
  "PP FERTILIZER SARDAR",
  "PP FERTILIZER LINER SUGAR",
  "PP FERTILIZER SUGAR",
  "PP FERTILIZER OLD SUGAR",
  "PP FERTILIZER JAFA",
  "PP FERTILIZER SS BROWN",
  "PP FERTILIZER PRTC PP",
  "PP FERTILIZER PP FCI NEW",
  "BOPP WHEAT SHAHII PARIWAR",
  "BOPP WHEAT KESAR PISTA BLUE",
  "BOPP WHEAT KESAR PISTA YELLOW",
  "BOPP WHEAT GANGA",
  "BOPP WHEAT FULKA",
  "BOPP WHEAT NAWAB",
  "BOPP WHEAT BHASKAR",
  "BOPP WHEAT KARODPATI",
  "BOPP WHEAT FORTUNE",
  "BOPP AGRI AUDI",
  "BOPP AGRI BULLET",
  "BOPP AGRI VAZEER",
  "BOPP AGRI 24 CARRAT",
  "BOPP 50KG ANAND MANGAL",
  "BOPP 50KG BAHURANI",
  "BOPP 50KG KARODPATI",
  "BOPP 50KG ASHIRWAD",
  "BOPP RICE PARBOILED",
  "BOPP RICE CHANDTARA",
  "BOPP RICE TULSI",
  "BOPP RICE GAJRAJ",
  "BOPP RICE INDUS/ HORNET",
  "OLD PP 50KG PANI COLOR",
  "OLD PP 50KG XX",
  "OLD PP 50KG SK2",
  "OLD PP 50KG LALLINE",
  "OLD PP 50KG JEERA",
  "OLD PP 100KG 100 KG PP OLD",
  "OLD PP 100KG 100KG 1 MARKA",
  "OLD PP 50KG KK",
  "OLD PP 50KG REPOL PP",
  "OLD PP 30KG LAMINATION",
  "OLD PP 30KG WITHOUT LAMINATION",
  "OLD PP 30KG PP RETI OLD",
  "OLD PP 30KG ONE BRAND OLD PP",
  "BARDANA 100KG 100 KG 1NO. BARDAN",
  "BARDANA 100KG 100 KG 2N0. BARDAN",
  "BARDANA 100KG 100 KG 3NO. BARDAN",
  "BARDANA 100KG KETIKE",
  "BARDANA 100KG POHA",
  "BARDANA 100KG VIKAS",
  "BARDANA 100KG NEW BARDANA 100 KG",
  "BARDANA 100KG DAMRI BOUTH",
  "BARDANA 100KG GODREJ",
  "FCI NEW BARDANA",
  "FCI PP BARDAN",
  "FCI P",
  "FCI RK",
  "FCI K",
  "FCI T",
  "SENGDANA SD K",
  "SENGDANA SD C",
  "SENGDANA SD",
  "SENGDANA SD 2",
  "KOLLAM KM",
  "STOPPER 19INCH",
  "STOPPER 20INCH",
  "PP SUTLI 500GM NIMRITI CHILLER",
  "PP SUTLI 500GM BLACK DIAMOND CHILLER",
  "PP SUTLI 500GM BLACK DIAMOND PATTI 1KG CHILLER",
  "PP SUTLI 500GM BLACK DIAMOND PATTI 0.500GM CHILLER",
  "PP SUTLI 500GM BLACK KOBRA 1KG CHILLER",
  "PP SUTLI 500GM HONDA CHILLER",
  "PP SUTLI 500GM NANO CHILLER",
  "PP SUTLI 500GM KHUSHBOO CHILLER",
  "PP SUTLI 500GM POLKING CHILLER",
  "PP SUTLI 500GM BAFNA COLOUR CHILLER",
  "PP SUTLI 500GM BAFNA WHITE CHILLER",
  "PP SUTLI 500GM SHARDHHA CHILLER",
  "PP SUTLI 500GM NAVRANG CHILLER",
  "BARLE TWIN SUTLI KISAN/BANSI CHILLER",
  "BARLE TWIN SUTLI KIVI RED CHILLER",
  "BARLE TWIN SUTLI KIVI GREEN CHILLER",
  "BARLE TWIN SUTLI JALARAM RED CHILLER",
  "BARLE TWIN SUTLI JALARAM GREEN CHILLER",
  "BARLE TWIN SUTLI KAUSTRI CHILLER",
  "BARLE TWIN SUTLI PRTC CHILLER",
  "BARLE TWIN SUTLI DARSHAN CHILLER",
  "BARLE TWIN SUTLI DHARSHAN POUCH CHILLER",
  "BARLE TWIN SUTLI BROWN CHILLER",
  "BARLE TWIN SUTLI GANESH CHILLER",
  "BARLE TWIN SUTLI MAHARAJA CHILLER",
  "BARLE TWIN SUTLI SWASTIK COLOUR CHILLER",
  "BARLE TWIN SUTLI SETAKARI CHILLER",
  "GREEN NET 1.5X50 MTR 90 PERCENT",
  "GREEN NET 2X50 MTR 90 PERCENT",
  "GREEN NET 3X50 MTR 90 PERCENT",
  "GREEN NET 4X50 MTR 90 PERCENT",
  "GREEN NET 1.5X50 MTR 75 PERCENT",
  "GREEN NET 2X50 MTR 75 PERCENT",
  "GREEN NET 3X50 MTR 75 PERCENT",
  "GREEN NET 4X50 MTR 75 PERCENT",
  "GREEN NET 1.5X50 MTR 50 PERCENT",
  "GREEN NET 2X50 MTR 50 PERCENT",
  "GREEN NET 3X50 MTR 50 PERCENT",
  "GREEN NET 4X50 MTR 50 PERCENT",
  "PP WHITE HAND BAG OLD",
];

const attendanceNames = [
  "JAYESH",
  "PRATIK",
  "SOHEL",
  "AKASH",
  "PANDITJI",
  "MAMA",
  "MANISH",
  "RAUBHAI",
];

const chillerTableColumns = [
  { label: "SR", width: "5%", kind: "sr" },
  { label: "PRODUCT NAME", width: "29%", field: "product_name", productCatalog: true },
  { label: "TOTAL KG", width: "9%", field: "total_kg", align: "center" },
  { label: "TOTAL BUNDLE", width: "10%", field: "total_bundle", align: "center" },
  { label: "TOTAL PIECES", width: "10%", field: "total_pieces", align: "center" },
  { label: "BUYER NAME / JAWAK NO", width: "29%", field: "buyer_name_jawak_no" },
  { label: "EXPENSES", width: "8%", field: "expenses", align: "center" },
];

const basePages = [
  {
    key: "page-1",
    withHeader: true,
    sections: [
      {
        key: "chiller_jawak_details",
        title: "CHILLER JAWAK DETAILS",
        rowClass: "rows-30",
        rowCount: 30,
        columns: chillerTableColumns,
      },
      {
        key: "transfer_entry",
        title: "TRANSFER ENTRY (WHOLESALE / RETAIL)",
        rowClass: "rows-4",
        rowCount: 4,
        columns: [
          { label: "SR", width: "5%", kind: "sr" },
          { label: "PRODUCT", width: "45%", field: "product", productCatalog: true },
          {
            label: "QUANTITY (WHOLESALE)",
            width: "25%",
            field: "quantity_wholesale",
            align: "center",
          },
          { label: "QUANTITY RETAIL", width: "25%", field: "quantity_retail", align: "center" },
        ],
      },
    ],
  },
  {
    key: "page-2",
    withHeader: false,
    sections: [
      {
        key: "attendance",
        title: "ATTENDANCE",
        rowClass: "rows-8",
        rows: attendanceNames.map((name) => ({ name })),
        columns: [
          { label: "SR", width: "5%", kind: "sr" },
          { label: "NAME", width: "45%", staticField: "name", staticAlign: "align-left" },
          { label: "ATTENDANCE (P / A)", width: "15%", field: "attendance", align: "center" },
          { label: "IN TIME", width: "15%", field: "in_time", align: "center" },
          { label: "PAID AMT", width: "20%", field: "paid_amt", align: "center" },
        ],
      },
      {
        key: "awak_details",
        title: "AWAK DETAILS",
        rowClass: "rows-10",
        rowCount: 10,
        columns: [
          { label: "SR", width: "5%", kind: "sr" },
          { label: "PRODUCT NAME", width: "29%", field: "product_name", productCatalog: true },
          { label: "TOTAL KG", width: "9%", field: "total_kg", align: "center" },
          { label: "TOTAL BUNDLE", width: "10%", field: "total_bundle", align: "center" },
          { label: "TOTAL PIECES", width: "10%", field: "total_pieces", align: "center" },
          {
            label: "SUPPLIER NAME / AWAK NO",
            width: "29%",
            field: "supplier_name_awak_no",
          },
          { label: "EXPENSES", width: "8%", field: "expenses", align: "center" },
        ],
      },
      {
        key: "jawak_details",
        title: "JAWAK DETAILS",
        rowClass: "rows-10",
        rowCount: 10,
        columns: [
          { label: "SR", width: "5%", kind: "sr" },
          { label: "PRODUCT NAME", width: "29%", field: "product_name", productCatalog: true },
          { label: "TOTAL KG", width: "9%", field: "total_kg", align: "center" },
          { label: "TOTAL BUNDLE", width: "10%", field: "total_bundle", align: "center" },
          { label: "TOTAL PIECES", width: "10%", field: "total_pieces", align: "center" },
          {
            label: "BUYER NAME / JAWAK NO",
            width: "29%",
            field: "buyer_name_jawak_no",
          },
          { label: "EXPENSES", width: "8%", field: "expenses", align: "center" },
        ],
      },
      {
        key: "unsorted_bandhai",
        title: "UNSORTED BANDHAI",
        rowClass: "rows-4",
        rowCount: 4,
        headerRows: [
          [
            { label: "SR", colspan: 1 },
            { label: "LOT NO", colspan: 1 },
            { label: "PRODUCT", colspan: 1 },
            { label: "MAJURI", colspan: 5 },
          ],
        ],
        columns: [
          { width: "5%", kind: "sr" },
          { width: "15%", field: "lot_no", align: "center" },
          { width: "36%", field: "product", productCatalog: true },
          { width: "6%", field: "majuri_1", align: "center" },
          { width: "6%", field: "majuri_2", align: "center" },
          { width: "6%", field: "majuri_3", align: "center" },
          { width: "6%", field: "majuri_4", align: "center" },
          { width: "20%", field: "majuri_total", align: "center" },
        ],
      },
    ],
  },
];

const DAILY_SHEET_KEY = "daily";
const MARKET_SHEET_NOTE =
  "NOTE FOR BUYERS: ALL RATES SUBJECT TO MARKET FLUCTUATIONS. FINAL RATES & DISCOUNTS CONFIRMED ONLY AT TIME OF BOOKING.";

const sheetDefinitions = [
  {
    key: "daily",
    label: "Daily Sheet",
    workspaceTitle: "Daily Wages & Operations Report",
    workspaceDescription:
      "Fill the shop sheet on screen, save the draft locally, and print the base report in two A4 pages. Add extra Chillar pages only when you need them.",
  },
  {
    key: "grains",
    label: "Grains Rate Sheet",
    workspaceTitle: "Wheat, Bajra & Jowar Rate Sheet",
    workspaceDescription:
      "Use this one-page market rate sheet for grains. Update the company line, date, parties, rates, and terms, then print the current A4 page.",
    reportTitle: "WHEAT - BAJRA - JOWAR REPORT",
    defaultValues: {
      "grains.meta.company": "PREMRATAN TR. CO. | JAYESH DAIYA: 9890703024",
      "grains.meta.date": "18 / 07 / 2026",
      "grains.meta.footer": "PREMRATAN TR. CO. — JAYESH DAIYA (9890703024)",
      "grains.rows.0.group": "CHETAN TR.",
      "grains.rows.1.description": "WHEAT",
      "grains.rows.1.rate": "3,000/-",
      "grains.rows.1.terms": "DELIVERY, 4% DISCOUNT",
      "grains.rows.2.description": "BAJRA GREEN",
      "grains.rows.2.rate": "3,100/-",
      "grains.rows.2.terms": "DELIVERY, 4% DISCOUNT",
      "grains.rows.3.group": "GAJANAD IND.",
      "grains.rows.4.description": "B. HORSE JAWAR",
      "grains.rows.4.rate": "4,251/-",
      "grains.rows.4.terms": "DELIVERY, 4% DISCOUNT",
      "grains.rows.5.description": "BADSHAH JAWAR",
      "grains.rows.5.rate": "3,251/-",
      "grains.rows.5.terms": "DELIVERY, 4% DISCOUNT",
    },
    rows: [
      { kind: "group", field: "grains.rows.0.group" },
      { kind: "item", descriptionField: "grains.rows.1.description", rateField: "grains.rows.1.rate", termsField: "grains.rows.1.terms" },
      { kind: "item", descriptionField: "grains.rows.2.description", rateField: "grains.rows.2.rate", termsField: "grains.rows.2.terms" },
      { kind: "group", field: "grains.rows.3.group" },
      { kind: "item", descriptionField: "grains.rows.4.description", rateField: "grains.rows.4.rate", termsField: "grains.rows.4.terms" },
      { kind: "item", descriptionField: "grains.rows.5.description", rateField: "grains.rows.5.rate", termsField: "grains.rows.5.terms" },
    ],
  },
  {
    key: "rice",
    label: "Rice Rate Sheet",
    workspaceTitle: "Rice Market Rate Sheet",
    workspaceDescription:
      "Use this one-page rice market sheet to update brands, rates, and booking terms, then print the current A4 page.",
    reportTitle: "RICE MARKET REPORT",
    defaultValues: {
      "rice.meta.company": "PREMRATAN TR. CO. | JAYESH DAIYA: 9890703024",
      "rice.meta.date": "18 / 07 / 2026",
      "rice.meta.footer": "PREMRATAN TR. CO. — JAYESH DAIYA (9890703024)",
      "rice.rows.0.group": "BHAYSHREE",
      "rice.rows.1.description": "BHAYSHREE AH",
      "rice.rows.1.rate": "7,000/-",
      "rice.rows.1.terms": "DELIVERY, 5% DISCOUNT",
      "rice.rows.2.description": "AMMI JAAN BROKEN",
      "rice.rows.2.rate": "3,350/-",
      "rice.rows.2.terms": "DELIVERY, 5% DISCOUNT",
      "rice.rows.3.group": "MA FOODS",
      "rice.rows.4.description": "MASURI BOILED",
      "rice.rows.4.rate": "3,700/-",
      "rice.rows.4.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.5.description": "MASURI STEAM",
      "rice.rows.5.rate": "4,300/-",
      "rice.rows.5.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.6.group": "YOG ENT.",
      "rice.rows.7.description": "DOUBLE MORE",
      "rice.rows.7.rate": "6,700/-",
      "rice.rows.7.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.8.description": "KESAR MALAI",
      "rice.rows.8.rate": "7,400/-",
      "rice.rows.8.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.9.description": "YOG AMBEMOHAR",
      "rice.rows.9.rate": "15,200/-",
      "rice.rows.9.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.10.description": "DOUBLE MORE STEAM",
      "rice.rows.10.rate": "NO SALE",
      "rice.rows.10.terms": "SPOT, 3% DISCOUNT (MIRGULADA)",
      "rice.rows.11.description": "NEER STEAM",
      "rice.rows.11.rate": "7,700/-",
      "rice.rows.11.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.12.group": "VISHAPRABHA RICE MILL",
      "rice.rows.13.description": "SONA STEAM RICE RAJMOTI",
      "rice.rows.13.rate": "6,000/-",
      "rice.rows.13.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.14.description": "RNR STEAM RICE NOORIE GOLD",
      "rice.rows.14.rate": "6,160/-",
      "rice.rows.14.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.15.description": "BROKEN STEAM MURLIDAR",
      "rice.rows.15.rate": "3,150/-",
      "rice.rows.15.terms": "DELIVERY, 3% DISCOUNT",
      "rice.rows.16.description": "INDRAYANI",
      "rice.rows.16.rate": "8,200/-",
      "rice.rows.16.terms": "DELIVERY, 3% DISCOUNT",
    },
    rows: [
      { kind: "group", field: "rice.rows.0.group" },
      { kind: "item", descriptionField: "rice.rows.1.description", rateField: "rice.rows.1.rate", termsField: "rice.rows.1.terms" },
      { kind: "item", descriptionField: "rice.rows.2.description", rateField: "rice.rows.2.rate", termsField: "rice.rows.2.terms" },
      { kind: "group", field: "rice.rows.3.group" },
      { kind: "item", descriptionField: "rice.rows.4.description", rateField: "rice.rows.4.rate", termsField: "rice.rows.4.terms" },
      { kind: "item", descriptionField: "rice.rows.5.description", rateField: "rice.rows.5.rate", termsField: "rice.rows.5.terms" },
      { kind: "group", field: "rice.rows.6.group" },
      { kind: "item", descriptionField: "rice.rows.7.description", rateField: "rice.rows.7.rate", termsField: "rice.rows.7.terms" },
      { kind: "item", descriptionField: "rice.rows.8.description", rateField: "rice.rows.8.rate", termsField: "rice.rows.8.terms" },
      { kind: "item", descriptionField: "rice.rows.9.description", rateField: "rice.rows.9.rate", termsField: "rice.rows.9.terms" },
      { kind: "item", descriptionField: "rice.rows.10.description", rateField: "rice.rows.10.rate", termsField: "rice.rows.10.terms" },
      { kind: "item", descriptionField: "rice.rows.11.description", rateField: "rice.rows.11.rate", termsField: "rice.rows.11.terms" },
      { kind: "group", field: "rice.rows.12.group" },
      { kind: "item", descriptionField: "rice.rows.13.description", rateField: "rice.rows.13.rate", termsField: "rice.rows.13.terms" },
      { kind: "item", descriptionField: "rice.rows.14.description", rateField: "rice.rows.14.rate", termsField: "rice.rows.14.terms" },
      { kind: "item", descriptionField: "rice.rows.15.description", rateField: "rice.rows.15.rate", termsField: "rice.rows.15.terms" },
      { kind: "item", descriptionField: "rice.rows.16.description", rateField: "rice.rows.16.rate", termsField: "rice.rows.16.terms" },
    ],
  },
  {
    key: "turdal",
    label: "Turdal Rate Sheet",
    workspaceTitle: "Turdal Market Rate Sheet",
    workspaceDescription:
      "Use this one-page turdal market sheet to maintain current rates and booking terms, then print the current A4 page.",
    reportTitle: "TURDAL MARKET REPORT",
    defaultValues: {
      "turdal.meta.company": "PREMRATAN TR. CO. | JAYESH DAIYA: 9890703024",
      "turdal.meta.date": "18 / 07 / 2026",
      "turdal.meta.footer": "PREMRATAN TR. CO. — JAYESH DAIYA (9890703024)",
      "turdal.rows.0.group": "SHREE FOOD PROCESSING (TURDAL)",
      "turdal.rows.1.description": "MAULI PATKA (POLISH)",
      "turdal.rows.1.rate": "114/-",
      "turdal.rows.1.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.2.description": "SAMRUDHA PATKA (POLISH)",
      "turdal.rows.2.rate": "108/-",
      "turdal.rows.2.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.3.description": "MARUTI 1.25 NO. (POLISH)",
      "turdal.rows.3.rate": "106/-",
      "turdal.rows.3.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.4.description": "VRUNDAVAN 1.25 NO. (POLISH)",
      "turdal.rows.4.rate": "100/-",
      "turdal.rows.4.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.5.description": "TOORDAL TUKDI",
      "turdal.rows.5.rate": "56/-",
      "turdal.rows.5.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.6.group": "MUNOT IND.",
      "turdal.rows.7.description": "TURDAL CLASSIC",
      "turdal.rows.7.rate": "110/-",
      "turdal.rows.7.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.8.description": "TURDAL JIMET",
      "turdal.rows.8.rate": "102/-",
      "turdal.rows.8.terms": "SPOT, 2% DISCOUNT",
      "turdal.rows.9.description": "TUKDI NAMO",
      "turdal.rows.9.rate": "58/-",
      "turdal.rows.9.terms": "SPOT, 2% DISCOUNT",
    },
    rows: [
      { kind: "group", field: "turdal.rows.0.group" },
      { kind: "item", descriptionField: "turdal.rows.1.description", rateField: "turdal.rows.1.rate", termsField: "turdal.rows.1.terms" },
      { kind: "item", descriptionField: "turdal.rows.2.description", rateField: "turdal.rows.2.rate", termsField: "turdal.rows.2.terms" },
      { kind: "item", descriptionField: "turdal.rows.3.description", rateField: "turdal.rows.3.rate", termsField: "turdal.rows.3.terms" },
      { kind: "item", descriptionField: "turdal.rows.4.description", rateField: "turdal.rows.4.rate", termsField: "turdal.rows.4.terms" },
      { kind: "item", descriptionField: "turdal.rows.5.description", rateField: "turdal.rows.5.rate", termsField: "turdal.rows.5.terms" },
      { kind: "group", field: "turdal.rows.6.group" },
      { kind: "item", descriptionField: "turdal.rows.7.description", rateField: "turdal.rows.7.rate", termsField: "turdal.rows.7.terms" },
      { kind: "item", descriptionField: "turdal.rows.8.description", rateField: "turdal.rows.8.rate", termsField: "turdal.rows.8.terms" },
      { kind: "item", descriptionField: "turdal.rows.9.description", rateField: "turdal.rows.9.rate", termsField: "turdal.rows.9.terms" },
    ],
  },
];

let currentSheetKey = getSheetKeyFromHash() || DAILY_SHEET_KEY;
let sheetDrafts = createDefaultSheetDrafts();
let extraPageCount = 0;
let baseProductCatalog = [];
let customProductCatalog = [];
let productCatalog = [];
let fieldMap = new Map();
let saveTimer = null;

function init() {
  loadProductCatalog();
  renderSheetSwitcher();
  refreshWorkspaceChrome();
  bindToolbar();
  bindFieldEvents();
  renderActiveSheet();
  loadDraft();
  renderProductSuggestionList();
}

function renderPages() {
  return buildPages().map(renderPage).join("");
}

function buildPages() {
  return [
    ...basePages,
    ...Array.from({ length: extraPageCount }, (_, index) => createExtraPage(index + 1)),
  ];
}

function createExtraPage(index) {
  return {
    key: `extra-page-${index}`,
    pageClass: "extra-table-page",
    withHeader: false,
    sections: [
      {
        key: getExtraPageKey(index),
        rowClass: "rows-30",
        rowCount: EXTRA_PAGE_ROW_COUNT,
        hideTitle: true,
        ariaTitle: `Extra Chiller Page ${index}`,
        sectionClass: "titleless-section extra-table-section",
        columns: chillerTableColumns,
      },
    ],
  };
}

function renderActiveSheet(values = getCurrentSheetState().values) {
  const root = document.getElementById("sheet-root");
  const definition = getSheetDefinition(currentSheetKey);
  root.innerHTML = isDailySheet() ? renderPages() : renderMarketSheet(definition);

  fieldMap = new Map(
    Array.from(document.querySelectorAll("[data-field]")).map((field) => [field.dataset.field, field]),
  );

  applyValues(isDailySheet() ? migrateLegacyValues(values) : values);
  refreshPageControls();
  refreshWorkspaceChrome();
}

function renderPage(page) {
  return `
    <section class="sheet-page ${page.pageClass || ""}">
      ${page.withHeader ? renderHeader() : ""}
      <div class="sheet-sections">
        ${page.sections.map(renderSection).join("")}
      </div>
    </section>
  `;
}

function renderHeader() {
  return `
    <div class="sheet-header">
      <h2 class="sheet-title">DAILY WAGES &amp; OPERATIONS REPORT - CHILLER JAWAK</h2>

      <div class="sheet-meta">
        ${renderMetaField("DATE:", DATE_FIELD)}
        ${renderMetaField("DAY:", DAY_FIELD)}
        ${renderMetaField("SUPERVISOR:", "meta.supervisor")}
      </div>

      <div class="sheet-rule"></div>
    </div>
  `;
}

function renderMarketSheet(definition) {
  return `
    <section class="sheet-page market-sheet-page">
      <div class="market-sheet-layout">
        <div class="market-sheet-header">
          <h2 class="market-sheet-title">${escapeHtml(definition.reportTitle)}</h2>
          <input
            class="market-sheet-line"
            type="text"
            autocomplete="off"
            spellcheck="false"
            data-field="${definition.key}.meta.company"
            aria-label="${escapeHtml(definition.label)} company line"
          >
          <input
            class="market-sheet-line"
            type="text"
            autocomplete="off"
            spellcheck="false"
            data-field="${definition.key}.meta.date"
            aria-label="${escapeHtml(definition.label)} date"
          >
          <div class="market-sheet-top-rule"></div>
        </div>

        <div class="market-sheet-note">
          <span class="market-sheet-note-icon">⚠️</span>${escapeHtml(MARKET_SHEET_NOTE)}
        </div>

        <table class="market-sheet-table">
          <colgroup>
            <col style="width: 56%">
            <col style="width: 11%">
            <col style="width: 33%">
          </colgroup>
          <thead>
            <tr>
              <th>PRODUCT / ITEM DESCRIPTION</th>
              <th>RATE (₹)</th>
              <th>TERMS &amp; DISCOUNTS</th>
            </tr>
          </thead>
          <tbody>
            ${getMarketRows(definition).map(renderMarketRow).join("")}
          </tbody>
        </table>

        <div class="market-footer">
          <input
            class="market-footer-input"
            type="text"
            autocomplete="off"
            spellcheck="false"
            data-field="${definition.key}.meta.footer"
            aria-label="${escapeHtml(definition.label)} footer"
          >
        </div>
      </div>
    </section>
  `;
}

function getMarketRows(definition) {
  const state = getCurrentSheetState();
  const companyRows = definition.rows.flatMap((row) => {
    if (row.kind !== "group") {
      return [row];
    }

    const count = state.companyExtraRows?.[row.field] || 0;
    const prefix = getCompanyExtraRowPrefix(row.field);
    const extraRows = Array.from({ length: count }, (_, index) =>
      createMarketExtraRow(`${prefix}.${index}`),
    );

    return [row, ...extraRows];
  });

  // Keep rows created with the previous version visible in older saved drafts.
  const legacyRows = Array.from(
    { length: state.extraRowCount || 0 },
    (_, index) => createMarketExtraRow(`${definition.key}.extra_rows.${index}`),
  );

  return [...companyRows, ...legacyRows];
}

function createMarketExtraRow(prefix) {
  return {
    kind: "item",
    descriptionField: `${prefix}.description`,
    rateField: `${prefix}.rate`,
    termsField: `${prefix}.terms`,
    isExtra: true,
  };
}

function getCompanyExtraRowPrefix(groupField) {
  return groupField.replace(/\.group$/, ".extra_rows");
}

function renderMarketRow(row) {
  if (row.kind === "group") {
    const extraRowCount = getCurrentSheetState().companyExtraRows?.[row.field] || 0;

    return `
      <tr class="market-group-row">
        <td colspan="3">
          <div class="market-group-content">
            <input
              class="market-group-input"
              type="text"
              autocomplete="off"
              spellcheck="false"
              data-field="${row.field}"
              aria-label="${escapeHtml(row.field)}"
            >
            <div
              class="market-company-actions no-print"
              data-html2canvas-ignore="true"
              aria-label="Company row controls"
            >
              <button
                class="market-company-button"
                type="button"
                data-action="add-company-row"
                data-company-field="${escapeHtml(row.field)}"
              >+ Add row</button>
              <button
                class="market-company-button market-company-remove"
                type="button"
                data-action="remove-company-row"
                data-company-field="${escapeHtml(row.field)}"
                ${extraRowCount === 0 ? "disabled" : ""}
              >Remove row</button>
            </div>
          </div>
        </td>
      </tr>
    `;
  }

  return `
    <tr>
      <td>
        <input
          class="market-row-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          data-field="${row.descriptionField}"
          aria-label="${escapeHtml(row.descriptionField)}"
        >
      </td>
      <td class="market-rate-cell">
        <input
          class="market-row-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          data-field="${row.rateField}"
          aria-label="${escapeHtml(row.rateField)}"
        >
      </td>
      <td>
        <input
          class="market-row-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          data-field="${row.termsField}"
          aria-label="${escapeHtml(row.termsField)}"
        >
      </td>
    </tr>
  `;
}

function renderMetaField(label, fieldName) {
  return `
    <div class="meta-field">
      <label for="${fieldName}">${escapeHtml(label)}</label>
      <input
        id="${fieldName}"
        class="meta-input"
        type="text"
        autocomplete="off"
        spellcheck="false"
        data-field="${fieldName}"
        aria-label="${escapeHtml(label)}"
      >
    </div>
  `;
}

function renderSection(section) {
  const rows = section.rows || Array.from({ length: section.rowCount }, () => ({}));
  const headerHtml = section.headerRows ? renderGroupedHeader(section) : renderSimpleHeader(section);
  const titleHtml = section.hideTitle
    ? ""
    : `<h3 class="section-title">${escapeHtml(section.title)}</h3>`;

  return `
    <section class="sheet-section ${section.sectionClass || ""}">
      ${titleHtml}
      <table class="sheet-table ${section.rowClass}">
        <colgroup>
          ${section.columns.map((column) => `<col style="width: ${column.width}">`).join("")}
        </colgroup>
        <thead>
          ${headerHtml}
        </thead>
        <tbody>
          ${rows.map((row, index) => renderRow(section, row, index)).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderSimpleHeader(section) {
  return `
    <tr>
      ${section.columns
        .map((column) => `<th>${escapeHtml(column.label || "")}</th>`)
        .join("")}
    </tr>
  `;
}

function renderGroupedHeader(section) {
  return section.headerRows
    .map(
      (headerRow) => `
        <tr>
          ${headerRow
            .map(
              (cell) =>
                `<th${cell.colspan ? ` colspan="${cell.colspan}"` : ""}>${escapeHtml(cell.label)}</th>`,
            )
            .join("")}
        </tr>
      `,
    )
    .join("");
}

function renderRow(section, row, index) {
  return `
    <tr>
      ${section.columns.map((column) => renderCell(section, row, index, column)).join("")}
    </tr>
  `;
}

function renderCell(section, row, index, column) {
  if (column.kind === "sr") {
    return `<td><div class="sr-cell">${index + 1}</div></td>`;
  }

  if (column.staticField) {
    return `
      <td>
        <div class="static-cell ${column.staticAlign || ""}">
          ${escapeHtml(row[column.staticField] || "")}
        </div>
      </td>
    `;
  }

  const fieldName = `${section.key}.${index}.${column.field}`;
  const sectionLabel = section.ariaTitle || section.title || section.key.replaceAll("_", " ");
  const fieldLabel = `${sectionLabel} row ${index + 1} ${column.field.replaceAll("_", " ")}`;
  const classNames = ["cell-input"];

  if (column.align) {
    classNames.push(column.align);
  }

  return `
    <td>
      <input
        class="${classNames.join(" ")}"
        type="text"
        inputmode="${column.align === "center" ? "numeric" : "text"}"
        autocomplete="off"
        spellcheck="false"
        aria-label="${escapeHtml(fieldLabel)}"
        data-field="${fieldName}"
        ${column.productCatalog ? `data-product-field="true" list="${PRODUCT_DATALIST_ID}"` : ""}
      >
    </td>
  `;
}

function bindToolbar() {
  document.querySelectorAll("[data-sheet-key]").forEach((button) => {
    button.addEventListener("click", () => switchSheet(button.dataset.sheetKey));
  });
  document.querySelector('[data-action="today"]').addEventListener("click", applyToday);
  document.querySelector('[data-action="add-page"]').addEventListener("click", addPage);
  document.querySelector('[data-action="remove-page"]').addEventListener("click", removeLastPage);
  document.querySelector('[data-action="save"]').addEventListener("click", saveDraft);
  document.querySelector('[data-action="clear"]').addEventListener("click", clearDraft);
  document.querySelector('[data-action="export"]').addEventListener("click", exportDraft);
  document.querySelector('[data-action="add-product"]').addEventListener("click", addProductFromToolbar);
  document.querySelector('[data-action="edit-products"]').addEventListener("click", openProductCatalogEditor);
  document.querySelectorAll('[data-action="close-product-editor"]').forEach((button) => {
    button.addEventListener("click", closeProductCatalogEditor);
  });
  document.querySelector('[data-action="save-products"]').addEventListener("click", saveProductCatalogEditor);
  document.querySelector('[data-action="reset-products"]').addEventListener("click", resetProductCatalogEditor);
  document.querySelector('[data-action="share-pdf"]').addEventListener("click", sharePdf);
  document.querySelector('[data-action="print"]').addEventListener("click", () => {
    saveDraft();
    window.print();
  });
  document.getElementById("import-file").addEventListener("change", importDraft);
  document.getElementById("sheet-root").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    if (button.dataset.action === "add-company-row") {
      addCompanyMarketRow(button.dataset.companyField);
    }

    if (button.dataset.action === "remove-company-row") {
      removeCompanyMarketRow(button.dataset.companyField);
    }
  });
  document.getElementById("new-product-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addProductFromToolbar();
    }
  });
  window.addEventListener("beforeprint", saveDraft);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductCatalogEditor();
    }
  });
  window.addEventListener("hashchange", () => {
    const nextSheetKey = getSheetKeyFromHash();

    if (nextSheetKey && nextSheetKey !== currentSheetKey) {
      switchSheet(nextSheetKey);
    }
  });
}

function bindFieldEvents() {
  document.addEventListener("input", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement) || !target.dataset.field) {
      return;
    }

    if (target.dataset.field === DATE_FIELD) {
      syncDayWithDate(target.value);
    }

    if (target.dataset.productField === "true") {
      renderProductSuggestionList(target.value);
    }

    scheduleSave();
  });

  document.addEventListener("focusin", (event) => {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.dataset.productField === "true") {
      renderProductSuggestionList(target.value);
    }
  });
}

function applyToday() {
  const now = new Date();
  const formattedDate = isDailySheet() ? formatDate(now) : formatMarketDate(now);
  const activeDateField = getActiveDateFieldName();

  setFieldValue(activeDateField, formattedDate);

  if (isDailySheet()) {
    syncDayWithDate(formattedDate);
  }

  saveDraft();
  setStatus(`Date set to ${formattedDate}.`, "success");
}

function syncDayWithDate(rawValue) {
  const parsedDate = parseLooseDate(rawValue);

  if (!parsedDate) {
    return;
  }

  setFieldValue(
    DAY_FIELD,
    parsedDate.toLocaleDateString("en-IN", { weekday: "long" }).toUpperCase(),
  );
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    saveDraft();
  }, 250);
}

function saveDraft() {
  persistCurrentSheetState();
  const payload = {
    currentSheetKey,
    sheetDrafts,
    productCatalog,
    customProducts: customProductCatalog,
    savedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  setStatus(`Draft saved locally at ${formatTime(payload.savedAt)}.`, "success");
}

function loadDraft() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    setStatus("Draft is ready. Use Print when the sheet is filled.");
    return;
  }

  try {
    const payload = JSON.parse(raw);
    hydrateImportedProductState(payload);
    hydrateDraftState(payload);
    renderActiveSheet(getCurrentSheetState().values);

    if (isDailySheet()) {
      syncDayWithDate(getFieldValue(DATE_FIELD));
    }

    if (payload.savedAt) {
      setStatus(`Saved draft restored from ${formatTime(payload.savedAt)}.`, "success");
    } else {
      setStatus("Saved draft restored.", "success");
    }
  } catch (error) {
    console.error(error);
    setStatus("Saved draft could not be read. You can continue with a fresh sheet.", "error");
  }
}

function clearDraft() {
  const confirmed = window.confirm(
    "Clear all entered values from the sheet? The saved local draft will also be removed.",
  );

  if (!confirmed) {
    return;
  }

  sheetDrafts = createDefaultSheetDrafts();
  currentSheetKey = DAILY_SHEET_KEY;
  extraPageCount = getCurrentSheetState().extraPageCount || 0;
  renderActiveSheet();
  localStorage.removeItem(STORAGE_KEY);
  setStatus("Sheet cleared. You can start a new day now.", "success");
}

function exportDraft() {
  persistCurrentSheetState();
  const payload = {
    currentSheetKey,
    sheetDrafts,
    productCatalog,
    customProducts: customProductCatalog,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const dateValue = sanitizeForFilename(getFieldValue(getActiveDateFieldName()) || "draft");
  const sheetLabel = sanitizeForFilename(getSheetDefinition(currentSheetKey).label.toLowerCase());

  link.href = URL.createObjectURL(blob);
  link.download = `${sheetLabel}-${dateValue}.json`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 0);

  setStatus(`Draft exported as JSON for ${dateValue}.`, "success");
}

async function sharePdf() {
  const shareButton = document.querySelector('[data-action="share-pdf"]');

  if (!(shareButton instanceof HTMLButtonElement)) {
    return;
  }

  saveDraft();
  shareButton.disabled = true;
  shareButton.textContent = "Making PDF...";

  try {
    const pdfBlob = await createPdfBlob();
    const dateValue = sanitizeForFilename(getFieldValue(getActiveDateFieldName()) || "report");
    const sheetLabel = sanitizeForFilename(getSheetDefinition(currentSheetKey).label.toLowerCase());
    const filename = `${sheetLabel}-${dateValue}.pdf`;
    const pdfFile = new File([pdfBlob], filename, { type: "application/pdf" });
    const shareText = `${getSheetDefinition(currentSheetKey).label} for ${dateValue}`;

    if (navigator.canShare?.({ files: [pdfFile] })) {
      await navigator.share({
        files: [pdfFile],
        title: getSheetDefinition(currentSheetKey).label,
        text: shareText,
      });
      setStatus("PDF is ready to send. Choose WhatsApp in the share menu.", "success");
      return;
    }

    downloadBlob(pdfBlob, filename);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}. The PDF has been downloaded; attach it to this message.`)}`,
      "_blank",
      "noopener",
    );
    setStatus("PDF downloaded. Attach it in the WhatsApp message that just opened.", "success");
  } catch (error) {
    if (error?.name === "AbortError") {
      setStatus("PDF sharing was cancelled.");
      return;
    }

    console.error(error);
    setStatus("The PDF could not be created. Check your internet connection and try again.", "error");
  } finally {
    shareButton.disabled = false;
    shareButton.textContent = "Share PDF / WhatsApp";
  }
}

async function createPdfBlob() {
  const jsPdfConstructor = window.jspdf?.jsPDF;

  if (typeof window.html2canvas !== "function" || !jsPdfConstructor) {
    throw new Error("PDF tools did not load");
  }

  const pages = Array.from(document.querySelectorAll("#sheet-root .sheet-page"));

  if (pages.length === 0) {
    throw new Error("There is no sheet to export");
  }

  document.body.classList.add("is-pdf-export");

  try {
    await new Promise((resolve) => {
      window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
    });

    const pdf = new jsPdfConstructor({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    for (const [index, page] of pages.entries()) {
      const canvas = await window.html2canvas(page, {
        backgroundColor: "#ffffff",
        logging: false,
        scale: 2,
        useCORS: true,
      });

      if (index > 0) {
        pdf.addPage("a4", "portrait");
      }

      pdf.addImage(canvas.toDataURL("image/jpeg", 0.94), "JPEG", 0, 0, 210, 297, undefined, "FAST");
    }

    return pdf.output("blob");
  } finally {
    document.body.classList.remove("is-pdf-export");
  }
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function importDraft(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);

    hydrateImportedProductState(payload);
    hydrateDraftState(payload);
    renderActiveSheet(getCurrentSheetState().values);
    saveDraft();
    setStatus(`Imported draft from ${file.name}.`, "success");
  } catch (error) {
    console.error(error);
    setStatus("That JSON file could not be imported.", "error");
  } finally {
    event.target.value = "";
  }
}

function collectFormValues() {
  return Object.fromEntries(
    Array.from(fieldMap.entries()).map(([name, field]) => [name, field.value]),
  );
}

function addPage() {
  if (!isDailySheet()) {
    return;
  }

  const values = collectFormValues();
  extraPageCount += 1;
  getCurrentSheetState().extraPageCount = extraPageCount;
  renderActiveSheet(values);
  saveDraft();
  setStatus(`Added extra page ${extraPageCount}.`, "success");
}

function removeLastPage() {
  if (!isDailySheet()) {
    return;
  }

  if (extraPageCount === 0) {
    setStatus("There are no extra pages to remove.", "error");
    return;
  }

  const values = collectFormValues();
  const lastPageIndex = extraPageCount;
  const pageKey = `${getExtraPageKey(lastPageIndex)}.`;
  const hasPageData = Object.entries(values).some(
    ([name, value]) => name.startsWith(pageKey) && String(value).trim() !== "",
  );

  if (
    hasPageData &&
    !window.confirm("Remove the last added page? Its entered values will be deleted.")
  ) {
    return;
  }

  Object.keys(values)
    .filter((name) => name.startsWith(pageKey))
    .forEach((name) => {
      delete values[name];
    });

  extraPageCount -= 1;
  getCurrentSheetState().extraPageCount = extraPageCount;
  renderActiveSheet(values);
  saveDraft();
  setStatus(`Removed extra page ${lastPageIndex}.`, "success");
}

function addCompanyMarketRow(groupField) {
  if (isDailySheet() || !groupField) {
    return;
  }

  const values = collectFormValues();
  const state = getCurrentSheetState();
  state.companyExtraRows ||= {};
  state.companyExtraRows[groupField] = (state.companyExtraRows[groupField] || 0) + 1;
  renderActiveSheet(values);
  saveDraft();
  setStatus("Added a row below this company.", "success");
}

function removeCompanyMarketRow(groupField) {
  if (isDailySheet() || !groupField) {
    return;
  }

  const state = getCurrentSheetState();
  const extraRowCount = state.companyExtraRows?.[groupField] || 0;

  if (extraRowCount === 0) {
    setStatus("There are no added rows under this company.", "error");
    return;
  }

  const values = collectFormValues();
  const rowPrefix = `${getCompanyExtraRowPrefix(groupField)}.${extraRowCount - 1}.`;
  const hasRowData = Object.entries(values).some(
    ([name, value]) => name.startsWith(rowPrefix) && String(value).trim() !== "",
  );

  if (hasRowData && !window.confirm("Remove the last added row for this company? Its entered values will be deleted.")) {
    return;
  }

  Object.keys(values)
    .filter((name) => name.startsWith(rowPrefix))
    .forEach((name) => {
      delete values[name];
    });

  state.companyExtraRows[groupField] = extraRowCount - 1;
  renderActiveSheet(values);
  saveDraft();
  setStatus("Removed the last added row for this company.", "success");
}

function refreshPageControls() {
  const removeButton = document.querySelector('[data-action="remove-page"]');
  const addButton = document.querySelector('[data-action="add-page"]');
  const productTools = document.querySelector(".product-tools");

  if (removeButton) {
    removeButton.disabled = !isDailySheet() || extraPageCount === 0;
    removeButton.classList.toggle("hidden", !isDailySheet());
  }

  if (addButton) {
    addButton.classList.toggle("hidden", !isDailySheet());
  }

  if (productTools) {
    productTools.classList.toggle("hidden", !isDailySheet());
  }
}

function renderSheetSwitcher() {
  document.querySelectorAll("[data-sheet-key]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sheetKey === currentSheetKey);
  });
}

function refreshWorkspaceChrome() {
  const definition = getSheetDefinition(currentSheetKey);
  const titleNode = document.getElementById("workspace-title");
  const descriptionNode = document.getElementById("workspace-description");

  if (titleNode) {
    titleNode.textContent = definition.workspaceTitle;
  }

  if (descriptionNode) {
    descriptionNode.textContent = definition.workspaceDescription;
  }

  renderSheetSwitcher();
}

function switchSheet(nextSheetKey) {
  if (!nextSheetKey || nextSheetKey === currentSheetKey || !getSheetDefinition(nextSheetKey)) {
    return;
  }

  persistCurrentSheetState();
  currentSheetKey = nextSheetKey;
  extraPageCount = getCurrentSheetState().extraPageCount || 0;
  renderActiveSheet(getCurrentSheetState().values);
  if (window.location.hash !== `#${nextSheetKey}`) {
    window.location.hash = nextSheetKey;
  }
  setStatus(`${getSheetDefinition(nextSheetKey).label} opened.`, "success");
}

function isDailySheet() {
  return currentSheetKey === DAILY_SHEET_KEY;
}

function getSheetDefinition(sheetKey) {
  return sheetDefinitions.find((definition) => definition.key === sheetKey);
}

function getSheetKeyFromHash() {
  const rawHash = window.location.hash.replace(/^#/, "");
  return getSheetDefinition(rawHash)?.key || "";
}

function createDefaultSheetDrafts() {
  return Object.fromEntries(
    sheetDefinitions.map((definition) => [
      definition.key,
      {
        values: { ...(definition.defaultValues || {}) },
        extraPageCount: definition.key === DAILY_SHEET_KEY ? 0 : 0,
        extraRowCount: 0,
        companyExtraRows: {},
      },
    ]),
  );
}

function getCurrentSheetState() {
  sheetDrafts[currentSheetKey] ||= {
    values: {},
    extraPageCount: 0,
    extraRowCount: 0,
    companyExtraRows: {},
  };
  return sheetDrafts[currentSheetKey];
}

function persistCurrentSheetState() {
  const state = getCurrentSheetState();
  state.values = collectFormValues();

  if (isDailySheet()) {
    state.extraPageCount = extraPageCount;
  }
}

function hydrateDraftState(payload) {
  const defaults = createDefaultSheetDrafts();

  if (payload.sheetDrafts) {
    sheetDrafts = Object.fromEntries(
      sheetDefinitions.map((definition) => {
        const saved = payload.sheetDrafts[definition.key] || {};
        return [
          definition.key,
          {
            values: {
              ...(definition.defaultValues || {}),
              ...(saved.values || {}),
            },
            extraPageCount:
              definition.key === DAILY_SHEET_KEY
                ? normalizeExtraPageCount(saved.extraPageCount)
                : 0,
            extraRowCount: normalizeExtraRowCount(saved.extraRowCount),
            companyExtraRows: normalizeCompanyExtraRows(saved.companyExtraRows),
          },
        ];
      }),
    );
    currentSheetKey = getSheetDefinition(payload.currentSheetKey)?.key || DAILY_SHEET_KEY;
  } else {
    sheetDrafts = defaults;
    sheetDrafts[DAILY_SHEET_KEY] = {
      values: payload.values || payload,
      extraPageCount: normalizeExtraPageCount(
        payload.extraPageCount ?? inferExtraPageCount(payload.values || payload),
      ),
      extraRowCount: 0,
      companyExtraRows: {},
    };
    currentSheetKey = DAILY_SHEET_KEY;
  }

  extraPageCount = getCurrentSheetState().extraPageCount || 0;
}

function getActiveDateFieldName() {
  return isDailySheet() ? DATE_FIELD : `${currentSheetKey}.meta.date`;
}

function loadProductCatalog() {
  const savedCatalog = loadSavedProductCatalogOverride();

  if (savedCatalog.length > 0) {
    baseProductCatalog = savedCatalog;
    customProductCatalog = [];
  } else {
    const legacyCustomProducts = loadSavedCustomProducts();

    baseProductCatalog = uniqueProducts([...PRODUCT_CATALOG_SEED, ...legacyCustomProducts]);
    customProductCatalog = [];

    if (legacyCustomProducts.length > 0) {
      persistProductCatalogOverride();
    }
  }

  rebuildProductCatalog();
}

function loadSavedProductCatalogOverride() {
  try {
    const raw = localStorage.getItem(PRODUCT_CATALOG_OVERRIDE_KEY);

    if (!raw) {
      return [];
    }

    return normalizeProductArray(JSON.parse(raw));
  } catch (error) {
    console.error(error);
    return [];
  }
}

function loadSavedCustomProducts() {
  try {
    const raw = localStorage.getItem(PRODUCT_STORAGE_KEY);

    if (!raw) {
      return [];
    }

    return normalizeProductArray(JSON.parse(raw));
  } catch (error) {
    console.error(error);
    return [];
  }
}

function hydrateCustomProducts(importedProducts) {
  if (!Array.isArray(importedProducts) || importedProducts.length === 0) {
    return;
  }

  baseProductCatalog = normalizeProductArray([
    ...baseProductCatalog,
    ...customProductCatalog,
    ...importedProducts,
  ]);
  customProductCatalog = [];
  persistProductCatalogOverride();
  rebuildProductCatalog();
}

function hydrateImportedProductState(payload) {
  if (Array.isArray(payload.productCatalog) && payload.productCatalog.length > 0) {
    hydrateProductCatalog(payload.productCatalog);
    return;
  }

  hydrateCustomProducts(payload.customProducts);
}

function hydrateProductCatalog(importedProducts) {
  if (!Array.isArray(importedProducts) || importedProducts.length === 0) {
    return;
  }

  baseProductCatalog = normalizeProductArray(importedProducts);
  customProductCatalog = [];
  persistProductCatalogOverride();
  rebuildProductCatalog();
}

function rebuildProductCatalog() {
  productCatalog = uniqueProducts([...baseProductCatalog, ...customProductCatalog]);
  renderProductSuggestionList();
  refreshProductCount();
}

function renderProductSuggestionList(query = "") {
  const datalist = document.getElementById(PRODUCT_DATALIST_ID);

  if (!datalist) {
    return;
  }

  const normalizedQuery = normalizeProductName(query);
  const suggestions = normalizedQuery
    ? productCatalog.filter((item) => item.includes(normalizedQuery))
    : productCatalog;

  datalist.innerHTML = suggestions
    .slice(0, MAX_PRODUCT_SUGGESTIONS)
    .map((item) => `<option value="${escapeHtml(item)}"></option>`)
    .join("");
}

function refreshProductCount() {
  const countNode = document.getElementById("product-count");

  if (countNode) {
    countNode.textContent = `${productCatalog.length} products ready for search`;
  }
}

function addProductFromToolbar() {
  const input = document.getElementById("new-product-input");

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const productName = normalizeProductName(input.value);

  if (!productName) {
    setStatus("Type a product name before adding it.", "error");
    return;
  }

  if (productCatalog.includes(productName)) {
    input.value = "";
    setStatus(`${productName} is already in the product list.`, "success");
    return;
  }

  baseProductCatalog = uniqueProducts([...productCatalog, productName]);
  customProductCatalog = [];
  persistProductCatalogOverride();
  rebuildProductCatalog();
  input.value = "";
  saveDraft();
  setStatus(`${productName} added to the product list.`, "success");
}

function persistProductCatalogOverride() {
  localStorage.setItem(PRODUCT_CATALOG_OVERRIDE_KEY, JSON.stringify(baseProductCatalog));
  localStorage.removeItem(PRODUCT_STORAGE_KEY);
}

function openProductCatalogEditor() {
  const shell = document.getElementById("product-editor-shell");
  const editor = document.getElementById("product-editor-text");

  if (!shell || !(editor instanceof HTMLTextAreaElement)) {
    return;
  }

  editor.value = productCatalog.join("\n");
  shell.classList.remove("hidden");
  shell.setAttribute("aria-hidden", "false");
  editor.focus();
  editor.setSelectionRange(0, 0);
}

function closeProductCatalogEditor() {
  const shell = document.getElementById("product-editor-shell");

  if (!shell || shell.classList.contains("hidden")) {
    return;
  }

  shell.classList.add("hidden");
  shell.setAttribute("aria-hidden", "true");
}

function saveProductCatalogEditor() {
  const editor = document.getElementById("product-editor-text");

  if (!(editor instanceof HTMLTextAreaElement)) {
    return;
  }

  const nextCatalog = normalizeProductArray(editor.value.split(/\r?\n/));

  if (nextCatalog.length === 0) {
    setStatus("Add at least one product name before saving the list.", "error");
    return;
  }

  baseProductCatalog = nextCatalog;
  customProductCatalog = [];
  persistProductCatalogOverride();
  rebuildProductCatalog();
  saveDraft();
  closeProductCatalogEditor();
  setStatus(`Saved ${productCatalog.length} product names for this browser.`, "success");
}

function resetProductCatalogEditor() {
  const confirmed = window.confirm(
    "Reset the product names back to the updated bundled list?",
  );

  if (!confirmed) {
    return;
  }

  baseProductCatalog = PRODUCT_CATALOG_SEED;
  customProductCatalog = [];
  localStorage.removeItem(PRODUCT_CATALOG_OVERRIDE_KEY);
  localStorage.removeItem(PRODUCT_STORAGE_KEY);
  rebuildProductCatalog();
  openProductCatalogEditor();
  saveDraft();
  setStatus("Product names reset to the updated bundled list.", "success");
}

function normalizeProductArray(values) {
  return uniqueProducts(
    values
      .map((value) => normalizeProductName(value))
      .filter(Boolean),
  );
}

function uniqueProducts(values) {
  const seen = new Set();
  const result = [];

  for (const value of values) {
    const key = value.toUpperCase();

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(value);
  }

  return result;
}

function normalizeProductName(value) {
  return String(value).replace(/\s+/g, " ").trim().toUpperCase();
}

function inferExtraPageCount(values) {
  const matches = Object.keys(values)
    .map((name) => name.match(/^extra_chiller_page_(\d+)\./))
    .filter(Boolean)
    .map((match) => Number(match[1]));

  return matches.length ? Math.max(...matches) : 0;
}

function normalizeExtraPageCount(value) {
  const count = Number(value);

  if (!Number.isFinite(count) || count < 0) {
    return 0;
  }

  return Math.floor(count);
}

function normalizeExtraRowCount(value) {
  const count = Number(value);

  if (!Number.isFinite(count) || count < 0) {
    return 0;
  }

  return Math.floor(count);
}

function normalizeCompanyExtraRows(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .map(([field, count]) => [field, normalizeExtraRowCount(count)])
      .filter(([, count]) => count > 0),
  );
}

function getExtraPageKey(index) {
  return `extra_chiller_page_${index}`;
}

function migrateLegacyValues(values) {
  const migrated = { ...values };

  for (let index = 0; index < 10; index += 1) {
    const awakLegacy = `awak_details.${index}.supplier_name_awak_no_expense`;
    const awakCurrent = `awak_details.${index}.supplier_name_awak_no`;
    const jawakLegacy = `jawak_details.${index}.buyer_name_jawak_no_expense`;
    const jawakCurrent = `jawak_details.${index}.buyer_name_jawak_no`;

    if (!migrated[awakCurrent] && migrated[awakLegacy]) {
      migrated[awakCurrent] = migrated[awakLegacy];
    }

    if (!migrated[jawakCurrent] && migrated[jawakLegacy]) {
      migrated[jawakCurrent] = migrated[jawakLegacy];
    }
  }

  return migrated;
}

function applyValues(values) {
  fieldMap.forEach((field, name) => {
    field.value = values[name] || "";
  });
}

function getFieldValue(name) {
  return fieldMap.get(name)?.value || "";
}

function setFieldValue(name, value) {
  const field = fieldMap.get(name);

  if (field) {
    field.value = value;
  }
}

function setStatus(message, tone = "") {
  const status = document.getElementById("status");
  status.className = "toolbar-status";

  if (tone) {
    status.classList.add(tone);
  }

  status.textContent = message;
}

function parseLooseDate(rawValue) {
  const value = rawValue.trim();
  let day;
  let month;
  let year;

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    [year, month, day] = value.split("-").map(Number);
  } else if (/^\d{2}[/-]\d{2}[/-]\d{4}$/.test(value)) {
    [day, month, year] = value.split(/[/-]/).map(Number);
  } else {
    return null;
  }

  const date = new Date(year, month - 1, day, 12);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatMarketDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day} / ${month} / ${year}`;
}

function formatTime(rawIso) {
  return new Date(rawIso).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function sanitizeForFilename(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

init();
