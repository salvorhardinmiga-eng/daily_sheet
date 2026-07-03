const STORAGE_KEY = "daily-sheet-draft-v1";
const PRODUCT_STORAGE_KEY = "daily-sheet-products-v1";
const DATE_FIELD = "meta.date";
const DAY_FIELD = "meta.day";
const EXTRA_PAGE_ROW_COUNT = 47;
const PRODUCT_DATALIST_ID = "product-options";
const MAX_PRODUCT_SUGGESTIONS = 80;
const PRODUCT_CATALOG_SEED = [
  "TY 170 GSM RAJ GOLD 12•15",
  "TY 170 GSM RAJ GOLD 12•18",
  "TY 170 GSM RAJ GOLD 15•18",
  "TY 170 GSM RAJ GOLD 15•30",
  "TY170 GSM RAJ GOLD 18•24",
  "TY 170 GSM RAJ GOLD 18•30",
  "TY 170 GSM RAJ GOLD 24•30",
  "TY 170 GSM RAJ GOLD 30•30",
  "TY 120 GSM RAJ GOLD 12•9",
  "TY 120 GSM RAJ GOLD 12•15",
  "TY 120 GSM RAJ GOLD 12•18",
  "TY 120 GSM RAJ GOLD 15•18",
  "TY 120 GSM RAJ GOLD 15•24",
  "TY 120 GSM RAJ GOLD 15•30",
  "TY 120 GSM RAJ GOLD 18•24",
  "TY 120 GSM RAJ GOLD 18•30",
  "TY 120 GSM RAJ GOLD 21•30",
  "TY 120 GSM RAJ GOLD 24•30",
  "TY 120 GSM RAJ GOLD 30•30",
  "TY 120 GSM RAJ GOLD 30•40",
  "TY 120 GSM RAJ GOLD 30•50",
  "TY 120 GSM RAJ GOLD 40•40",
  "TY 120 GSM RAJ GOLD 60•60",
  "TW 120 GSM RAJ GOLD 24•18",
  "TW 120 GSM RAJ GOLD 12•15",
  "TW 120 GSM RAJ GOLD 12•18",
  "TW 120 GSM RAJ GOLD 15•18",
  "TW 120 GSM RAJ GOLD 18•30",
  "TW 120 GSM RAJ GOLD 30•24",
  "TW 120 GSM RAJ GOLD 30•40",
  "TB 170 GSM 24 CARAT 9•12",
  "TB 170 GSM 24 CARAT 12•15",
  "TB 170 GSM 24 CARAT 12•18",
  "TB 170 GSM 24 CARAT 15•18",
  "TB 170 GSM 24 CARAT 15•24",
  "TB 170 GSM 24 CARAT 15•30",
  "TB 170 GSM 24 CARAT 18•24",
  "TB 170 GSM 24 CARAT 18•30",
  "TB 170 GSM 24 CARAT 30•21",
  "TB 170 GSM 24 CARAT 30•24",
  "TB 170 GSM 24 CARAT 30•30",
  "TB 170 GSM 24 CARAT 30•40",
  "TB 170 GSM 24 CARAT 30•50",
  "TG 200 GSM RAJ GOLD 18•24",
  "TG 200 GSM RAJ GOLD 30•18",
  "TG 200 GSM RAJ GOLD 30•24",
  "TG 200 GSM RAJ GOLD 30•40",
  "TG 200 GSM RAJ GOLD 36•18",
  "TG 200 GSM RAJ GOLD 36•24",
  "PANNI 12FT",
  "PANNI 14FT",
  "PANNI 15FT",
  "PANNI 20FT",
  "PANNI 24FT",
  "9•15",
  "10•16",
  "11•16",
  "11•15",
  "11•20",
  "12•15",
  "12•20",
  "12•24",
  "12•30",
  "12•40",
  "15•18",
  "15•24",
  "18•24",
  "18•25",
  "18•30",
  "20•30",
  "20•32",
  "RAJ GOLD 12•3",
  "RAJ GOLD 12•4",
  "RAJ GOLD 15•2.5",
  "RAJ GOLD 18•2",
  "RAJ GOLD 24•1.5",
  "KALASH 12•4.5",
  "KALASH 18•3",
  "KALASH 18•3 BLUE",
  "KALASH 12•4.5 BLUE",
  "KOREA 12FT",
  "KOREA 15FT",
  "KOREA 16FT",
  "KOREA 18FT",
  "KOREA 20FT",
  "KOREA 24FT",
  "VEER BLACK",
  "KOREA 30FT",
  "TB 200 GSM RAJ GOLD 24•18",
  "TB 200 GSM RAJ GOLD 30•24",
  "TB 200 GSM RAJ GOLD 30•40",
  "TB 200 GSM RAJ GOLD 30•36",
  "TB 200 GSM RAJ GOLD 36•24",
  "TY 170 GSM RAJ GOLD 12•9",
  "LD 12X2",
  "LD 12X3",
  "LD 12X5",
  "LD 18X0.75",
  "LD 18X1",
  "LD 18X2",
  "LD 18X3",
  "LD 24X1",
  "LD 24X0.75",
  "1000 MTR.",
  "1000 MTR.RED",
  "1000 MTR.GREEN",
  "2000 MTR.IMP",
  "2000 MTR.IMP GREEN",
  "2000 MTR.IMP RED",
  "2000 MTR.IMP MULTICOLOUR",
  "2000 MTR.GW3",
  "210/4P/70",
  "GUM POWDER",
  "PINK",
  "RED",
  "GREEN",
  "YELLOW",
  "RUFA",
  "LIBRA",
  "REGULAR",
  "J",
  "S",
  "14/2",
  "ATM",
  "T",
  "T1",
  "J CHILLER",
  "S CHILLER",
  "T CHILLER",
  "NIMRITI",
  "BLACK DIAMOND",
  "BLACK DIAMOND PATTI 1KG",
  "BLACK DIAMOND PATTI 0.500GM",
  "BLACK KOBRA 1KG",
  "HONDA",
  "NANO",
  "KHUSHBOO",
  "POLKING",
  "BAFNA COLOUR",
  "BAFNA WHITE",
  "SHARDHHA",
  "NAVRANG",
  "KISAN/BANSI",
  "KIVI RED",
  "KIVI GREEN",
  "KIVI GOLD",
  "JALARAM RED",
  "JALARAM GREEN",
  "KAUSTRI",
  "PRTC SUTLI",
  "DARSHAN",
  "DHARSHAN POUCH",
  "BROWN SUTLI",
  "BLACK",
  "GANESH",
  "MAHARAJA",
  "SWASTIK WHITE",
  "SWASTIK COLOUR",
  "SHETKARI",
  "KADAK SUTLI",
  "KISAN/BANSI1KG",
  "KISAN/BANSI 2KG",
  "DHARSHAN 2KG",
  "MANGO HV 58GM",
  "MANGO BL 50GM PATTA",
  "MANGO BL 50 GM PLAIN",
  "MANGO LQ 48GM PATTA",
  "MANGO LQ 48GM PLAIN",
  "MANGO NR 36GM PATTA",
  "MANGO NR 36GM PLAIN",
  "BHAJAN 22•38",
  "BHAJAN EXPORT 45GM",
  "BHAJAN 28•42",
  "MANGO 20•31 LENO",
  "TIGER LENO",
  "MANGO PO 50",
  "MANGO PO 40",
  "KALASH LENO",
  "MANGO 18•32 GREENTON",
  "MANGO 18•22 GREEN TON",
  "32•36 JUMBO",
  "24•40 JUMBO",
  "REPOL TAPAD",
  "SAMSUNG TAPAD",
  "CEMPLAST",
  "BROWN",
  "BALAJI AGRO",
  "WHITE 1",
  "WHITE 2",
  "BLACK 5TON",
  "LINER",
  "12•18 HAND BAG",
  "12•19 HAND BAG",
  "15•20 HAND BAG",
  "19•30 WHITE",
  "22•36 WHITE",
  "24•36 WHITE",
  "24•46 WHITE",
  "28•48 WHITE",
  "30•45 WHITE",
  "30•50 WHITE",
  "36•56 PATTA",
  "36•40 WHITE",
  "44•60 WHITE",
  "19•30 PANI COLOUR",
  "24•36 PANI COLOUR",
  "19•30 MULTI",
  "24•36 MULTI",
  "28•47 MULTI",
  "30•50 MULTI",
  "36•56 MULTI",
  "24*38 BLACK",
  "28•48 BLACK",
  "UJWALA 72GM",
  "UJWALA AA",
  "UJWALA NEEM",
  "UJWALA YELLOW",
  "UJWALA LAMINATION",
  "UJWALA ORIGINAL",
  "IFFCO",
  "IPL",
  "KRIBCO GREEN",
  "SARDAR",
  "LINER SUGAR",
  "SUGAR",
  "OLD SUGAR",
  "JAFA",
  "SS BROWN",
  "PRTC PP",
  "PP FCI NEW",
  "SHAHII PARIWAR",
  "KESAR PISTA BLUE",
  "KESAR PISTA YELLOW",
  "GANGA",
  "FULKA",
  "NAWAB",
  "BHASKAR",
  "KARODPATI",
  "FORTUNE",
  "AUDI",
  "BULLET",
  "VAZEER",
  "24 CARRAT",
  "ANAND MANGAL",
  "BAHURANI",
  "ASHIRWAD",
  "PARBOILED",
  "CHANDTARA",
  "TULSI",
  "GAJRAJ",
  "INDUS/ HORNET",
  "PANI COLOR",
  "XX",
  "SK2",
  "LALLINE",
  "JEERA",
  "100 KG PP OLD",
  "100KG 1 MARKA",
  "KK",
  "REPOL PP",
  "LAMINATION",
  "WITHOUT LAMINATION",
  "PP RETI OLD",
  "ONE BRAND OLD PP",
  "100 KG 1NO. BARDAN",
  "100 KG 2N0. BARDAN",
  "100 KG 3NO. BARDAN",
  "KETIKE",
  "POHA",
  "VIKAS",
  "NEW BARDANA 100 KG",
  "DAMRI BOUTH",
  "GODREJ",
  "FCI NEW BARDANA",
  "FCI PP BARDAN",
  "FCI P",
  "FCI RK",
  "FCI K",
  "FCI T",
  "SD K",
  "SD C",
  "SD",
  "SD 2",
  "KM",
  "STOPPER 19INCH",
  "STOPPER 20INCH",
  "NIMRITI CHILLER",
  "BLACK DIAMOND CHILLER",
  "BLACK DIAMOND PATTI 1KG CHILLER",
  "BLACK DIAMOND PATTI 0.500GM CHILLER",
  "BLACK KOBRA 1KG CHILLER",
  "HONDA CHILLER",
  "NANO CHILLER",
  "KHUSHBOO CHILLER",
  "POLKING CHILLER",
  "BAFNA COLOUR CHILLER",
  "BAFNA WHITE CHILLER",
  "SHARDHHA CHILLER",
  "NAVRANG CHILLER",
  "KISAN/BANSI CHILLER",
  "KIVI RED CHILLER",
  "KIVI GREEN CHILLER",
  "JALARAM RED CHILLER",
  "JALARAM GREEN CHILLER",
  "KAUSTRI CHILLER",
  "PRTC CHILLER",
  "DARSHAN CHILLER",
  "DHARSHAN POUCH CHILLER",
  "BROWN CHILLER",
  "GANESH CHILLER",
  "MAHARAJA CHILLER",
  "SWASTIK COLOUR CHILLER",
  "SETAKARI CHILLER",
  "1.5X50 MTR 90 PERCENT",
  "2X50 MTR 90 PERCENT",
  "3X50 MTR 90 PERCENT",
  "4X50 MTR 90 PERCENT",
  "1.5X50 MTR 75 PERCENT",
  "2X50 MTR 75 PERCENT",
  "3X50 MTR 75 PERCENT",
  "4X50 MTR 75 PERCENT",
  "1.5X50 MTR 50 PERCENT",
  "2X50 MTR 50 PERCENT",
  "3X50 MTR 50 PERCENT",
  "4X50 MTR 50 PERCENT",
  "HAND BAG OLD",
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

let extraPageCount = 0;
let baseProductCatalog = [];
let customProductCatalog = [];
let productCatalog = [];
let fieldMap = new Map();
let saveTimer = null;

function init() {
  loadProductCatalog();
  bindToolbar();
  bindFieldEvents();
  renderSheet();
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

function renderSheet(values = {}) {
  const root = document.getElementById("sheet-root");
  root.innerHTML = renderPages();

  fieldMap = new Map(
    Array.from(document.querySelectorAll("[data-field]")).map((field) => [field.dataset.field, field]),
  );

  applyValues(migrateLegacyValues(values));
  refreshPageControls();
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
  document.querySelector('[data-action="today"]').addEventListener("click", applyToday);
  document.querySelector('[data-action="add-page"]').addEventListener("click", addPage);
  document.querySelector('[data-action="remove-page"]').addEventListener("click", removeLastPage);
  document.querySelector('[data-action="save"]').addEventListener("click", saveDraft);
  document.querySelector('[data-action="clear"]').addEventListener("click", clearDraft);
  document.querySelector('[data-action="export"]').addEventListener("click", exportDraft);
  document.querySelector('[data-action="add-product"]').addEventListener("click", addProductFromToolbar);
  document.querySelector('[data-action="print"]').addEventListener("click", () => {
    saveDraft();
    window.print();
  });
  document.getElementById("import-file").addEventListener("change", importDraft);
  document.getElementById("new-product-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addProductFromToolbar();
    }
  });
  window.addEventListener("beforeprint", saveDraft);
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
  const formattedDate = formatDate(now);

  setFieldValue(DATE_FIELD, formattedDate);
  syncDayWithDate(formattedDate);
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
  const payload = {
    values: collectFormValues(),
    customProducts: customProductCatalog,
    extraPageCount,
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
    hydrateCustomProducts(payload.customProducts);
    extraPageCount = normalizeExtraPageCount(
      payload.extraPageCount ?? inferExtraPageCount(payload.values || payload),
    );
    renderSheet(payload.values || payload);
    syncDayWithDate(getFieldValue(DATE_FIELD));

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

  extraPageCount = 0;
  renderSheet();
  localStorage.removeItem(STORAGE_KEY);
  setStatus("Sheet cleared. You can start a new day now.", "success");
}

function exportDraft() {
  const payload = {
    values: collectFormValues(),
    customProducts: customProductCatalog,
    extraPageCount,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const dateValue = sanitizeForFilename(getFieldValue(DATE_FIELD) || "draft");

  link.href = URL.createObjectURL(blob);
  link.download = `daily-wages-report-${dateValue}.json`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 0);

  setStatus(`Draft exported as JSON for ${dateValue}.`, "success");
}

async function importDraft(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);

    hydrateCustomProducts(payload.customProducts);
    extraPageCount = normalizeExtraPageCount(
      payload.extraPageCount ?? inferExtraPageCount(payload.values || payload),
    );
    renderSheet(payload.values || payload);
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
  const values = collectFormValues();
  extraPageCount += 1;
  renderSheet(values);
  saveDraft();
  setStatus(`Added extra page ${extraPageCount}.`, "success");
}

function removeLastPage() {
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
  renderSheet(values);
  saveDraft();
  setStatus(`Removed extra page ${lastPageIndex}.`, "success");
}

function refreshPageControls() {
  const removeButton = document.querySelector('[data-action="remove-page"]');

  if (removeButton) {
    removeButton.disabled = extraPageCount === 0;
  }
}

function loadProductCatalog() {
  baseProductCatalog = PRODUCT_CATALOG_SEED;
  customProductCatalog = loadSavedCustomProducts();
  rebuildProductCatalog();
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

  customProductCatalog = normalizeProductArray([
    ...customProductCatalog,
    ...importedProducts,
  ]);
  persistCustomProducts();
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

  customProductCatalog = uniqueProducts([...customProductCatalog, productName]);
  persistCustomProducts();
  rebuildProductCatalog();
  input.value = "";
  saveDraft();
  setStatus(`${productName} added to the product list.`, "success");
}

function persistCustomProducts() {
  localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(customProductCatalog));
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
