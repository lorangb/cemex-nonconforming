const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pptx.layout = "WIDE";
pptx.author = "Good Neighbors of Lyons / public document archive synthesis";
pptx.company = "Good Neighbors of Lyons";
pptx.subject = "Trial-style public brief to reverse CEMEX Lyons rescission";
pptx.title = "Reverse the CEMEX Lyons Rescission";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-US",
};

const C = {
  ink: "18282D",
  charcoal: "2F3A3D",
  river: "116B74",
  teal: "288B8F",
  rust: "B64B35",
  red: "963927",
  gold: "D89B36",
  paper: "F7F3EA",
  white: "FFFFFF",
  pale: "F2F5F0",
  gray: "657175",
  line: "C7D0C8",
  dark: "122126",
};

const W = 13.333;
const H = 7.5;
const img = (name) => path.join(__dirname, "..", "Images", name);
const out = path.join(__dirname, "..", "12_Presentations", "CEMEX_Lyons_Reverse_Rescission_Traffic_Brief.pptx");

function addFooter(slide, source) {
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.05, w: W, h: 0.45, fill: { color: C.ink }, line: { color: C.ink } });
  slide.addText(source, { x: 0.45, y: 7.15, w: 11.75, h: 0.18, fontSize: 6.8, color: "DCE4DF", margin: 0, fit: "shrink" });
  slide.addText(String(pptx._slides.length), { x: 12.58, y: 7.14, w: 0.28, h: 0.18, fontSize: 7, color: "DCE4DF", align: "right", margin: 0 });
}

function header(slide, label) {
  slide.background = { color: C.paper };
  slide.addText(label.toUpperCase(), { x: 0.58, y: 0.22, w: 3.6, h: 0.18, fontSize: 6.8, bold: true, color: C.river, margin: 0, charSpacing: 0.6, fit: "shrink" });
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 0.55,
    y: opts.y ?? 0.42,
    w: opts.w ?? 10.8,
    h: opts.h ?? 0.78,
    fontFace: "Aptos Display",
    fontSize: opts.size ?? 27,
    bold: true,
    color: opts.color ?? C.ink,
    margin: 0,
    fit: "shrink",
  });
}

function band(slide, x, y, w, h, fill = C.white, line = C.line) {
  slide.addShape(pptx.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: line, width: 0.8 } });
}

function callout(slide, text, x, y, w, h, color = C.rust, fill = C.white, size = 13.5) {
  band(slide, x, y, w, h, fill);
  slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.14, h, fill: { color }, line: { color } });
  slide.addText(text, { x: x + 0.3, y: y + 0.09, w: w - 0.45, h: h - 0.18, fontSize: size, bold: true, color: C.ink, margin: 0, fit: "shrink" });
}

function stat(slide, value, label, x, y, w, color = C.rust, size = 31) {
  slide.addText(value, { x, y, w, h: 0.54, fontFace: "Aptos Display", fontSize: size, bold: true, color, align: "center", margin: 0, fit: "shrink" });
  slide.addText(label, { x, y: y + 0.58, w, h: 0.34, fontSize: 9.2, color: C.charcoal, align: "center", margin: 0.02, fit: "shrink" });
}

function bullets(slide, items, x, y, w, h, opts = {}) {
  const runs = items.map((item, i) => ({
    text: item,
    options: { bullet: { indent: opts.indent ?? 12 }, breakLine: i !== items.length - 1 },
  }));
  slide.addText(runs, {
    x, y, w, h,
    fontSize: opts.size ?? 12.0,
    color: opts.color ?? C.ink,
    margin: opts.margin ?? 0.06,
    fit: "shrink",
    paraSpaceAfterPt: opts.space ?? 4,
  });
}

function chip(slide, text, x, y, w, color = C.river) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h: 0.34, rectRadius: 0.05, fill: { color }, line: { color } });
  slide.addText(text, { x: x + 0.1, y: y + 0.09, w: w - 0.2, h: 0.1, fontSize: 7.4, bold: true, color: C.white, align: "center", margin: 0, fit: "shrink" });
}

function barChart(slide, data, x, y, w, h, maxVal, opts = {}) {
  band(slide, x, y, w, h, C.white);
  const baseY = y + h - 0.68;
  const leftPad = 0.58;
  const slot = (w - leftPad - 0.45) / data.length;
  slide.addShape(pptx.ShapeType.line, { x: x + leftPad - 0.12, y: baseY, w: w - leftPad - 0.25, h: 0, line: { color: C.line, width: 1 } });
  data.forEach((d, i) => {
    const bh = (h - 1.48) * (d.value / maxVal);
    const bx = x + leftPad + i * slot + slot * 0.21;
    const bw = slot * 0.58;
    slide.addShape(pptx.ShapeType.rect, { x: bx, y: baseY - bh, w: bw, h: bh, fill: { color: d.color }, line: { color: d.color } });
    slide.addText(d.valueText ?? String(Math.round(d.value)), { x: bx - 0.24, y: baseY - bh - 0.34, w: bw + 0.48, h: 0.22, fontSize: 13, bold: true, color: d.color, align: "center", margin: 0, fit: "shrink" });
    slide.addText(d.label, { x: bx - 0.25, y: baseY + 0.13, w: bw + 0.5, h: 0.42, fontSize: 7.7, color: C.charcoal, align: "center", margin: 0, fit: "shrink" });
  });
  if (opts.caption) {
    slide.addText(opts.caption, { x: x + 0.35, y: y + 0.24, w: w - 0.7, h: 0.22, fontSize: 11.4, bold: true, color: C.ink, margin: 0, fit: "shrink" });
  }
}

function verdictSlide(slide, top, bottom, source) {
  slide.background = { color: C.dark };
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.dark }, line: { color: C.dark } });
  slide.addText(top, { x: 0.78, y: 1.24, w: 11.35, h: 1.22, fontFace: "Georgia", fontSize: 31, bold: true, color: C.white, margin: 0, fit: "shrink" });
  slide.addText(bottom, { x: 0.82, y: 3.12, w: 10.8, h: 1.0, fontSize: 19, bold: true, color: "F1E7D7", margin: 0, fit: "shrink" });
  addFooter(slide, source);
}

// 1
{
  const s = pptx.addSlide();
  s.background = { color: C.dark };
  s.addImage({ path: img("cemex_lyons.png"), x: 0, y: 0, w: W, h: H, transparency: 18, sizing: { type: "cover", w: W, h: H } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.dark, transparency: 10 }, line: { color: C.dark } });
  chip(s, "PUBLIC TRIAL BRIEF", 0.62, 0.62, 1.75, C.rust);
  s.addText("Reverse the Rescission", { x: 0.62, y: 1.16, w: 6.8, h: 0.72, fontFace: "Georgia", fontSize: 37, bold: true, color: C.white, margin: 0, fit: "shrink" });
  s.addText("CEMEX changed the plant operation. The truck traffic proves it.", {
    x: 0.66, y: 2.18, w: 6.95, h: 0.82, fontSize: 21, bold: true, color: "F2EEE5", margin: 0, fit: "shrink",
  });
  s.addText("A simplified case for Boulder County citizens: reinstate the April 10, 2024 termination determination.", {
    x: 0.66, y: 3.35, w: 6.35, h: 0.44, fontSize: 13.2, color: "DDE5E0", margin: 0, fit: "shrink",
  });
  s.addText("Prepared from the CEMEX Lyons public archive. Verify against original records before official filing.", { x: 0.66, y: 6.86, w: 6.5, h: 0.18, fontSize: 7.4, color: "CDD8D2", margin: 0 });
}

// 2
{
  const s = pptx.addSlide();
  header(s, "Opening Statement");
  title(s, "This case is not complicated.");
  callout(s, "For decades, the plant depended on local and adjoining raw-material supply. CEMEX replaced that system with distant trucked feedstock. That is an altered nonconforming use, and the traffic numbers are the proof.", 0.72, 1.25, 11.9, 0.9, C.red, C.white, 14.5);
  const xs = [0.9, 4.95, 9.0];
  const heads = ["Historic use", "What changed", "Why it matters"];
  const bodies = [
    "Local quarry and conveyor logistics anchored the cement plant operation.",
    "After local sources ran down and Dowe Flats closed, raw materials shifted to highway trucks.",
    "Article 4-1003.C.1.d reaches alterations that create or threaten hazard, nuisance, neighborhood impacts, or increased need for services.",
  ];
  heads.forEach((h, i) => {
    band(s, xs[i], 2.7, 3.45, 2.7, i === 1 ? C.dark : C.white, i === 1 ? C.dark : C.line);
    s.addShape(pptx.ShapeType.ellipse, { x: xs[i] + 0.28, y: 3.02, w: 0.48, h: 0.48, fill: { color: i === 2 ? C.rust : C.river }, line: { color: C.white, width: 1 } });
    s.addText(String(i + 1), { x: xs[i] + 0.43, y: 3.17, w: 0.14, h: 0.08, fontSize: 8.5, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText(h, { x: xs[i] + 0.95, y: 3.06, w: 2.05, h: 0.24, fontSize: 14.4, bold: true, color: i === 1 ? C.white : C.ink, margin: 0, fit: "shrink" });
    s.addText(bodies[i], { x: xs[i] + 0.38, y: 3.72, w: 2.72, h: 0.92, fontSize: 13.5, bold: true, color: i === 1 ? "F4EEE4" : C.ink, margin: 0, fit: "shrink" });
  });
  addFooter(s, "Sources: Silvestro letters to Dale Case, July 9 and Dec. 20, 2024; Boulder County Land Use Code Article 4-1003.C.1.d; CEMEX Historical Data.xlsx.");
}

// 3
{
  const s = pptx.addSlide();
  header(s, "The Timeline");
  title(s, "The old operation is gone.");
  const events = [
    ["1994", "Plant becomes nonconforming. Dowe Flats approval required conveyor logistics that reduced road hauling."],
    ["2018-20", "CEMEX begins relying on Wyoming limestone as Dowe Flats limestone runs out."],
    ["Sept. 30, 2022", "Dowe Flats closes. Raw materials shift further to external highway trucks."],
    ["April 10, 2024", "County terminates nonconforming status based on altered operations and increased truck impacts."],
  ];
  s.addShape(pptx.ShapeType.line, { x: 1.1, y: 3.35, w: 10.9, h: 0, line: { color: C.river, width: 2.1 } });
  events.forEach((ev, i) => {
    const x = 0.8 + i * 3.08;
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.78, y: 3.12, w: 0.46, h: 0.46, fill: { color: i === 3 ? C.red : C.river }, line: { color: C.white, width: 1 } });
    band(s, x, 1.45, 2.65, 1.35, C.white);
    s.addText(ev[0], { x: x + 0.22, y: 1.75, w: 2.05, h: 0.34, fontSize: 18, bold: true, color: i === 3 ? C.red : C.river, align: "center", margin: 0, fit: "shrink" });
    s.addText(ev[1], { x: x + 0.2, y: 4.08, w: 2.18, h: 1.0, fontSize: 11.2, color: C.ink, align: "center", margin: 0.02, fit: "shrink" });
  });
  callout(s, "CEMEX wants the County to compare traffic as if the operation stayed the same. The record shows the opposite.", 1.05, 5.85, 11.0, 0.56, C.rust, C.white, 13.2);
  addFooter(s, "Sources: CEMEX Historical Data.xlsx, Data Dec18 and Inbound Material Modes; PT0658 annual reports; Boulder County April 10, 2024 Notice; Silvestro letters.");
}

// 4
{
  const s = pptx.addSlide();
  header(s, "The Decisive Exhibit");
  title(s, "Raw-material truck traffic dwarfs the 1994 baseline.");
  barChart(s, [
    { label: "1994 inbound", value: 54, valueText: "54", color: C.gray },
    { label: "2023 inbound", value: 452, valueText: "452", color: C.red },
    { label: "2024-25 Wyoming", value: 498, valueText: "498", color: C.rust },
    { label: "2025-26 Wyoming*", value: 625, valueText: "625", color: C.red },
  ], 0.72, 1.32, 7.4, 4.85, 650, { caption: "Inbound raw-material ADTs / 25-ton truck-equivalent ADTs" });
  band(s, 8.55, 1.32, 3.95, 4.85, C.dark, C.dark);
  s.addText("The point", { x: 8.92, y: 1.68, w: 1.6, h: 0.3, fontSize: 15.2, bold: true, color: C.white, margin: 0 });
  s.addText("The 1994 inbound baseline was about 54 ADTs.", { x: 8.95, y: 2.35, w: 2.95, h: 0.46, fontSize: 13.5, bold: true, color: "F4EEE4", margin: 0, fit: "shrink" });
  s.addText("Wyoming limestone alone is about 498 ADTs in 2024-25, before shale and other materials.", { x: 8.95, y: 3.25, w: 2.95, h: 0.7, fontSize: 13.8, bold: true, color: C.gold, margin: 0, fit: "shrink" });
  stat(s, "9.2x", "2024-25 Wyoming alone vs 1994 inbound", 8.95, 4.55, 2.9, C.gold, 32);
  s.addText("*2025-26 PT0658 report is marked under review.", { x: 8.96, y: 5.63, w: 2.75, h: 0.17, fontSize: 7.8, color: "DCE5E1", margin: 0 });
  addFooter(s, "Sources: CEMEX Historical Data.xlsx, Data Dec18 row 7; PT0658 annual reports; PT0658_Wyoming_Traffic_Calculations.csv. Wyoming conversion uses 25-ton trucks, two movements, 3 PCE factor, 250 workdays.");
}

// 5
{
  const s = pptx.addSlide();
  header(s, "Corroboration");
  title(s, "Even the total-traffic comparison beats CEMEX.");
  barChart(s, [
    { label: "1994 baseline", value: 456, valueText: "456", color: C.gray },
    { label: "2019-22 avg", value: 641, valueText: "641", color: C.teal },
    { label: "2023 calc.", value: 729, valueText: "729", color: C.rust },
    { label: "June 2023", value: 1283, valueText: "1,283", color: C.red },
  ], 0.78, 1.28, 6.65, 4.9, 1300, { caption: "Total CEMEX ADTs, normalized to passenger-car equivalents" });
  band(s, 7.92, 1.28, 4.55, 4.9, C.white);
  s.addText("Why this matters", { x: 8.28, y: 1.65, w: 3.0, h: 0.3, fontSize: 15, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "The rescission premise was that 1994 traffic was not exceeded.",
    "The corrected workbook shows 2023 total ADTs about 60% above 1994.",
    "The County's April 2024 Stantec-cited spike shows the new trucked-feedstock operation in action.",
    "The raw-material evidence is stronger, but total traffic corroborates it.",
  ], 8.36, 2.18, 3.45, 1.9, { size: 11.1, space: 2.5 });
  callout(s, "CEMEX does not win even on the comparison Dale Case chose.", 8.34, 4.93, 3.45, 0.58, C.red, C.pale, 12.4);
  addFooter(s, "Sources: CEMEX Historical Data.xlsx, Data Dec18 rows 3, 5, 6 and data table; April 10, 2024 Notice citing Stantec June 2023.");
}

// 6
{
  const s = pptx.addSlide();
  header(s, "CEMEX's Defenses");
  title(s, "The defenses are distractions from the changed operation.");
  const items = [
    ["Background traffic", "SH-66 background volumes do not answer the question: what traffic did CEMEX itself generate?"],
    ["Landis report", "It mixes units, omits 1994, relies on weak regression, and ignores the actual inbound trend."],
    ["Stantec backpedal", "CEMEX submitted the study to CDOT. A later memo cannot erase the observed June 2023 spike."],
    ["Estoppel / takings", "The 2002 letter preserved only lawful nonconforming status. CEMEX never had a right to expand it."],
  ];
  items.forEach((it, i) => {
    const x = i % 2 === 0 ? 0.8 : 6.85;
    const y = i < 2 ? 1.35 : 3.85;
    band(s, x, y, 5.35, 1.72, C.white);
    chip(s, it[0], x + 0.28, y + 0.25, 1.68, i === 1 || i === 3 ? C.rust : C.gray);
    s.addText(it[1], { x: x + 2.2, y: y + 0.32, w: 2.55, h: 0.68, fontSize: 12.2, bold: true, color: C.ink, margin: 0, fit: "shrink" });
  });
  callout(s, "A rescission should not rest on excuses that do not confront the central fact: CEMEX replaced local supply with heavy truck deliveries.", 1.08, 6.15, 10.9, 0.5, C.red, C.pale, 12.2);
  addFooter(s, "Sources: Silvestro letters, July 9 and Dec. 20, 2024; CEMEX Historical Data.xlsx, Landis Flaws; Boulder County Oct. 8, 2002 letter; Landis and Stantec materials.");
}

// 7
{
  const s = pptx.addSlide();
  header(s, "The Law");
  title(s, "The legal rule fits the facts.");
  band(s, 0.75, 1.25, 5.75, 4.85, C.dark, C.dark);
  s.addText("Article 4-1003.C.1.d", { x: 1.12, y: 1.62, w: 3.1, h: 0.3, fontSize: 15.5, bold: true, color: C.white, margin: 0 });
  s.addText("A nonconforming use loses protection for any alteration that creates or threatens hazard or nuisance, adversely affects neighborhood character, or intensifies the use or need for services.", {
    x: 1.12, y: 2.24, w: 4.35, h: 1.28, fontSize: 15.5, bold: true, color: "F4EEE4", margin: 0, fit: "shrink",
  });
  s.addShape(pptx.ShapeType.line, { x: 1.12, y: 4.0, w: 4.3, h: 0, line: { color: "6C7B7D", width: 1.1 } });
  s.addText("Article 4-1003.H.1 puts the burden on CEMEX to show it has not unlawfully altered or expanded the use.", {
    x: 1.12, y: 4.44, w: 4.2, h: 0.56, fontSize: 12.0, bold: true, color: "DCE5E1", margin: 0, fit: "shrink",
  });
  band(s, 6.95, 1.25, 5.55, 4.85, C.white);
  s.addText("Trial-lawyer translation", { x: 7.32, y: 1.62, w: 3.4, h: 0.3, fontSize: 15.5, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "The altered use is the new feedstock logistics.",
    "The truck traffic is the evidence and consequence.",
    "The 1994 baseline does not protect a materially different operation.",
    "The County may reverse the rescission on corrected findings.",
  ], 7.4, 2.18, 3.9, 1.75, { size: 12.2, space: 4 });
  callout(s, "Silvestro's key point: CEMEX is wrong to limit the Code to onsite structural changes.", 7.35, 4.92, 3.75, 0.48, C.rust, C.pale, 11.8);
  addFooter(s, "Sources: Boulder County Land Use Code Article 4-1003.C.1.d and H.1; Silvestro letters; Fire House Car Wash, 30 P.3d 762.");
}

// 8
verdictSlide(
  pptx.addSlide(),
  "The County should reverse the rescission.",
  "The corrected record shows a changed operation, dramatic raw-material truck traffic, and a flawed no-increase rationale. The April 10, 2024 termination should be reinstated or reissued with corrected findings.",
  "Requested action synthesized from ZON-23-0003 record, CEMEX Historical Data.xlsx, PT0658 annual reports, Silvestro letters, and Boulder County April 10, 2024 Notice."
);

// 9
{
  const s = pptx.addSlide();
  header(s, "Core Exhibits");
  title(s, "The proof package");
  const exhibits = [
    ["Traffic workbook", "CEMEX Historical Data.xlsx: Data Dec18, ADT summary, total ADTs, post-Dowe ADTs, Landis Flaws, Inbound Material Modes."],
    ["Wyoming tonnage", "PT0658 annual reports and PT0658_Wyoming_Traffic_Calculations.csv."],
    ["County record", "April 10, 2024 termination notice; Stantec and Landis materials; Boulder County 2002 letter."],
    ["Legal letters", "James R. Silvestro letters for GNL/SOSVV dated July 9, 2024 and December 20, 2024."],
  ];
  exhibits.forEach((ex, i) => {
    const x = i % 2 === 0 ? 0.85 : 6.75;
    const y = i < 2 ? 1.45 : 3.65;
    band(s, x, y, 5.35, 1.45, C.white);
    s.addShape(pptx.ShapeType.rect, { x, y, w: 0.14, h: 1.45, fill: { color: i === 1 ? C.red : C.river }, line: { color: i === 1 ? C.red : C.river } });
    s.addText(ex[0], { x: x + 0.35, y: y + 0.25, w: 1.9, h: 0.26, fontSize: 13.5, bold: true, color: C.ink, margin: 0, fit: "shrink" });
    s.addText(ex[1], { x: x + 2.35, y: y + 0.24, w: 2.45, h: 0.52, fontSize: 10.5, color: C.charcoal, margin: 0, fit: "shrink" });
  });
  callout(s, "Public-facing note: this is an advocacy synthesis. Attach the primary PDFs and workbook tables before any official filing.", 1.05, 5.95, 10.95, 0.52, C.river, C.pale, 12.2);
  addFooter(s, "Selected sources from the local CEMEX Lyons public archive.");
}

pptx.writeFile({ fileName: out });
