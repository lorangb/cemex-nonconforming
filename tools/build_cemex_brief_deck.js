const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Good Neighbors of Lyons / public document archive synthesis";
pptx.company = "Good Neighbors of Lyons";
pptx.subject = "Steelman legal brief for terminating CEMEX Lyons nonconforming use";
pptx.title = "CEMEX Lyons Nonconforming Use: Public Legal Brief";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-US",
};
pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pptx.layout = "WIDE";

const C = {
  ink: "1F2A2E",
  charcoal: "2F3A3D",
  river: "1E6B75",
  moss: "5F7F52",
  rust: "B55239",
  gold: "D59E3B",
  paper: "F7F3EA",
  white: "FFFFFF",
  mist: "E8ECE8",
  pale: "F2F4EF",
  gray: "687275",
  line: "C8D0C7",
  red: "9D3E2F",
};

const W = 13.333;
const H = 7.5;
const img = (name) => path.join(__dirname, "..", "Images", name);
const out = path.join(__dirname, "..", "12_Presentations", "CEMEX_Lyons_Nonconforming_Use_Legal_Brief_Public.pptx");

function addFooter(slide, source) {
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 7.05, w: W, h: 0.45, fill: { color: C.ink }, line: { color: C.ink } });
  slide.addText(source, { x: 0.45, y: 7.15, w: 11.85, h: 0.18, fontFace: "Aptos", fontSize: 6.8, color: "DCE3DE", margin: 0, fit: "shrink" });
  slide.addText(String(pptx._slides.length), { x: 12.55, y: 7.14, w: 0.32, h: 0.18, fontSize: 7, color: "DCE3DE", align: "right", margin: 0 });
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? 0.55,
    y: opts.y ?? 0.36,
    w: opts.w ?? 8.4,
    h: opts.h ?? 0.62,
    fontFace: "Aptos Display",
    fontSize: opts.size ?? 25,
    bold: true,
    color: opts.color ?? C.ink,
    margin: 0,
    fit: "shrink",
    breakLine: false,
  });
}

function chip(slide, text, x, y, w, color = C.river) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h: 0.36, rectRadius: 0.06, fill: { color }, line: { color } });
  slide.addText(text, { x: x + 0.12, y: y + 0.095, w: w - 0.24, h: 0.12, fontSize: 7.6, bold: true, color: C.white, margin: 0, align: "center", fit: "shrink" });
}

function band(slide, x, y, w, h, fill = C.white, line = C.line) {
  slide.addShape(pptx.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: line, width: 0.8 } });
}

function stat(slide, value, label, x, y, w, color = C.rust) {
  slide.addText(value, { x, y, w, h: 0.55, fontFace: "Aptos Display", fontSize: 28, bold: true, color, margin: 0, align: "center", fit: "shrink" });
  slide.addText(label, { x, y: y + 0.58, w, h: 0.34, fontSize: 9.5, color: C.charcoal, margin: 0.02, align: "center", fit: "shrink" });
}

function bullets(slide, items, x, y, w, h, opts = {}) {
  const runs = [];
  items.forEach((item, i) => {
    runs.push({ text: item, options: { bullet: { indent: opts.indent ?? 12 }, breakLine: i !== items.length - 1 } });
  });
  slide.addText(runs, {
    x, y, w, h,
    fontSize: opts.size ?? 12.6,
    color: opts.color ?? C.ink,
    margin: opts.margin ?? 0.06,
    breakLine: false,
    fit: "shrink",
    paraSpaceAfterPt: opts.space ?? 5,
  });
}

function callout(slide, text, x, y, w, h, color = C.river) {
  slide.addShape(pptx.ShapeType.rect, { x, y, w: 0.12, h, fill: { color }, line: { color } });
  slide.addText(text, { x: x + 0.22, y: y + 0.04, w: w - 0.25, h: h - 0.08, fontSize: 13.2, bold: true, color: C.ink, margin: 0, fit: "shrink" });
}

function sectionLabel(slide, text, x, y, color = C.river) {
  slide.addText(text.toUpperCase(), { x, y, w: 2.1, h: 0.18, fontSize: 6.6, bold: true, color, margin: 0, charSpacing: 0.6 });
}

function addCaseHeader(slide, label) {
  slide.background = { color: C.paper };
  sectionLabel(slide, label, 0.58, 0.22);
}

// 1
{
  const s = pptx.addSlide();
  s.background = { color: C.ink };
  s.addImage({ path: img("cemex_lyons.png"), x: 0, y: 0, w: W, h: H, transparency: 18, sizing: { type: "cover", w: W, h: H } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.ink, transparency: 13 }, line: { color: C.ink } });
  chip(s, "PUBLIC LEGAL BRIEF", 0.62, 0.6, 1.55, C.rust);
  s.addText("The Steelman Case for Terminating CEMEX Lyons' Nonconforming Use", {
    x: 0.62, y: 1.12, w: 7.55, h: 1.65, fontFace: "Georgia", fontSize: 31, bold: true, color: C.white, margin: 0, fit: "shrink",
  });
  s.addText("A synthesized presentation from the Boulder County public record and the CEMEX Lyons document archive.", {
    x: 0.66, y: 3.08, w: 5.9, h: 0.55, fontSize: 13.5, color: "E9EEE9", margin: 0, fit: "shrink",
  });
  s.addText("Prepared for public understanding and civic discussion. Not legal advice.", { x: 0.66, y: 6.74, w: 5.2, h: 0.2, fontSize: 7.6, color: "D0D6D2", margin: 0 });
}

// 2
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Executive Summary");
  title(s, "The core theory is simple");
  callout(s, "CEMEX may continue only the historic nonconforming use. Boulder County’s own record says the right terminates if that use is enlarged, altered, intensified, or creates offsite hazards or nuisance impacts.", 0.65, 1.17, 7.0, 0.94, C.rust);
  const xs = [0.75, 3.05, 5.35, 7.65, 9.95];
  const labels = [
    ["1994", "Plant becomes nonconforming"],
    ["2002", "County warns enlargement can terminate"],
    ["1997-2000", "Capacity project follows the baseline"],
    ["2022-23", "Dowe Flats closes; truck deliveries surge"],
    ["2024", "County determines status terminated"],
  ];
  xs.forEach((x, i) => {
    s.addShape(pptx.ShapeType.ellipse, { x, y: 3.0, w: 0.48, h: 0.48, fill: { color: i === 4 ? C.rust : C.river }, line: { color: C.white, width: 1 } });
    if (i < xs.length - 1) s.addShape(pptx.ShapeType.line, { x: x + 0.48, y: 3.24, w: 1.82, h: 0, line: { color: C.line, width: 2 } });
    s.addText(labels[i][0], { x: x - 0.3, y: 3.65, w: 1.08, h: 0.28, fontSize: 13, bold: true, color: C.ink, align: "center", margin: 0 });
    s.addText(labels[i][1], { x: x - 0.65, y: 4.03, w: 1.85, h: 0.48, fontSize: 9.5, color: C.charcoal, align: "center", margin: 0.02, fit: "shrink" });
  });
  band(s, 0.65, 5.2, 12.0, 1.05, C.white);
  bullets(s, [
    "Best case: termination is a code-enforcement consequence of CEMEX’s own post-baseline changes, not a new taking.",
    "Strongest evidence: County determination, 2002 County letter, Stantec traffic numbers, EPA capacity-modification record, aerial-photo structural record.",
    "Public framing: this is about enforcing the limits of a grandfathered industrial use in a changed valley.",
  ], 0.92, 5.42, 11.3, 0.62, { size: 10.5, space: 2 });
  addFooter(s, "Sources: Boulder County April 10, 2024 Notice of Termination; Boulder County Oct. 8, 2002 land-use letter; GNL/SOSVV July and Dec. 2024 letters.");
}

// 3
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Legal Standard");
  title(s, "Article 4-1003 is designed to shrink nonconformity, not protect expansion");
  band(s, 0.65, 1.08, 5.65, 4.85, C.white);
  s.addText("What can terminate the right to continue", { x: 0.95, y: 1.42, w: 4.3, h: 0.28, fontSize: 15, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "A new structure containing or accessory to the nonconforming use.",
    "Enlargement or alteration beyond normal or routine maintenance.",
    "Expansion of land area occupied by the use.",
    "Any other alteration creating hazards, nuisance, neighborhood impacts, or intensifying land/service needs.",
  ], 1.02, 1.98, 4.85, 2.32, { size: 12 });
  s.addShape(pptx.ShapeType.rect, { x: 0.9, y: 4.65, w: 4.75, h: 0.55, fill: { color: C.pale }, line: { color: C.line } });
  s.addText("The decisive clause is 4-1003.C.1.d: operational changes can matter when their effects burden the public.", { x: 1.08, y: 4.82, w: 4.38, h: 0.18, fontSize: 10.5, bold: true, color: C.rust, margin: 0, fit: "shrink" });
  s.addShape(pptx.ShapeType.chevron, { x: 6.72, y: 2.32, w: 1.1, h: 1.02, fill: { color: C.rust }, line: { color: C.rust } });
  band(s, 8.1, 1.08, 4.55, 4.85, C.ink, C.ink);
  s.addText("Steelman inference", { x: 8.45, y: 1.42, w: 3.5, h: 0.28, fontSize: 14.5, bold: true, color: C.white, margin: 0 });
  s.addText("A grandfathered use is not a blank check. If the cement plant’s post-baseline operation became materially different from the use Boulder County tolerated in 1994, the County can enforce the Code.", {
    x: 8.48, y: 2.05, w: 3.55, h: 1.2, fontSize: 17, bold: true, color: "F5F1E8", margin: 0.02, fit: "shrink",
  });
  s.addText("This is why CEMEX’s response focuses so heavily on baseline, causation, traffic methodology, and takings arguments.", { x: 8.48, y: 4.0, w: 3.5, h: 0.55, fontSize: 10.5, color: "DADFD9", margin: 0.02, fit: "shrink" });
  addFooter(s, "Sources: Boulder County Land Use Code Article 4-1003, as quoted in Oct. 8, 2002 letter and April 10, 2024 Notice.");
}

// 4
{
  const s = pptx.addSlide();
  addCaseHeader(s, "The County’s Own Warning");
  title(s, "CEMEX was told the use could remain only if it stayed within 4-1003");
  band(s, 0.65, 1.12, 6.0, 4.75, C.white);
  s.addText("October 8, 2002 Boulder County letter", { x: 0.95, y: 1.42, w: 4.4, h: 0.28, fontSize: 15, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "Recognized the cement kiln and attendant equipment as a nonconforming use.",
    "Said the use could potentially remain indefinitely only if it continued to meet Article 4-1003.",
    "Explicitly warned that enlargement or abandonment terminates the right to continue.",
    "Clarified that prior cellular/special-use reviews did not address the kiln’s nonconformity.",
  ], 1.02, 1.98, 5.05, 2.48, { size: 12.2 });
  callout(s, "This letter is powerful because it is not citizen advocacy. It is Boulder County’s contemporaneous position, sent to CEMEX.", 1.0, 4.8, 5.05, 0.55, C.river);
  s.addImage({ path: img("Time.jpeg"), x: 7.2, y: 1.05, w: 2.7, h: 2.3, transparency: 6, sizing: { type: "cover", w: 2.7, h: 2.3 } });
  stat(s, "2002", "formal County notice", 10.05, 1.28, 1.8, C.rust);
  stat(s, "1994", "nonconforming baseline", 10.05, 2.88, 1.8, C.river);
  stat(s, "4-1003", "termination rule", 10.05, 4.48, 1.8, C.moss);
  addFooter(s, "Source: Boulder County Land Use Department letter to CEMEX Plant Manager John Lohr, Oct. 8, 2002.");
}

// 5
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Operational Alteration");
  title(s, "The plant’s feedstock system changed when Dowe Flats closed");
  s.addImage({ path: img("cemex_mining.jpeg"), x: 0.65, y: 1.13, w: 5.2, h: 4.32, sizing: { type: "cover", w: 5.2, h: 4.32 } });
  band(s, 6.32, 1.13, 6.35, 4.32, C.white);
  s.addText("Before: local, integrated supply", { x: 6.7, y: 1.48, w: 2.9, h: 0.28, fontSize: 14.5, bold: true, color: C.river, margin: 0 });
  bullets(s, [
    "EPA complaint describes the Lyons facility as a cement plant plus Dowe Flats quarry connected by a two-mile conveyor.",
    "Local quarry material moved to the plant for stockpiling, crushing, drying, kiln feed, clinker, and cement.",
  ], 6.77, 1.9, 4.95, 0.95, { size: 11.3, space: 2 });
  s.addShape(pptx.ShapeType.line, { x: 6.7, y: 3.2, w: 5.3, h: 0, line: { color: C.line, width: 1.2 } });
  s.addText("After: external trucked material", { x: 6.7, y: 3.52, w: 3.05, h: 0.28, fontSize: 14.5, bold: true, color: C.rust, margin: 0 });
  bullets(s, [
    "Dowe Flats mining approval expired September 30, 2022.",
    "Community evidence frames the new operation as imported raw materials replacing adjacent mine/conveyor supply.",
    "That shift is the County/community theory of operational alteration.",
  ], 6.77, 3.94, 4.95, 1.18, { size: 11.3, space: 2 });
  callout(s, "The strongest framing is not simply “more traffic.” It is a changed industrial supply chain with offsite impacts.", 1.0, 5.88, 11.2, 0.48, C.rust);
  addFooter(s, "Sources: U.S. v. CEMEX Amended Complaint ¶¶8-10; Boulder County Resolution 2022-075; GNL/SOSVV Dec. 20, 2024 letter.");
}

// 6
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Traffic Evidence");
  title(s, "The County’s best traffic fact: 593 to 1,283 average daily trips");
  const chartX = 0.85, chartY = 1.38, chartW = 6.0, chartH = 4.25;
  band(s, chartX, chartY, chartW, chartH, C.white);
  s.addText("Average Daily Trips cited by Boulder County", { x: chartX + 0.35, y: chartY + 0.28, w: 3.6, h: 0.24, fontSize: 12.5, bold: true, color: C.ink, margin: 0 });
  const baseY = chartY + 3.55;
  s.addShape(pptx.ShapeType.line, { x: chartX + 0.55, y: baseY, w: 4.9, h: 0, line: { color: C.line, width: 1.2 } });
  const h1 = 1.45, h2 = 3.12;
  s.addShape(pptx.ShapeType.rect, { x: chartX + 1.1, y: baseY - h1, w: 1.1, h: h1, fill: { color: C.river }, line: { color: C.river } });
  s.addShape(pptx.ShapeType.rect, { x: chartX + 3.75, y: baseY - h2, w: 1.1, h: h2, fill: { color: C.rust }, line: { color: C.rust } });
  s.addText("593", { x: chartX + 0.85, y: baseY - h1 - 0.43, w: 1.6, h: 0.32, fontSize: 19, bold: true, color: C.river, align: "center", margin: 0 });
  s.addText("1,283", { x: chartX + 3.45, y: baseY - h2 - 0.43, w: 1.7, h: 0.32, fontSize: 19, bold: true, color: C.rust, align: "center", margin: 0 });
  s.addText("June 2022\nDowe Flats operating", { x: chartX + 0.7, y: baseY + 0.18, w: 1.9, h: 0.45, fontSize: 9.2, color: C.charcoal, align: "center", margin: 0 });
  s.addText("June 2023\nDowe Flats closed", { x: chartX + 3.35, y: baseY + 0.18, w: 1.9, h: 0.45, fontSize: 9.2, color: C.charcoal, align: "center", margin: 0 });
  stat(s, "+690", "additional ADTs", 7.35, 1.5, 1.65, C.rust);
  stat(s, "+116%", "increase cited", 9.12, 1.5, 1.65, C.rust);
  stat(s, "540", "ADTs above 150 threshold", 10.9, 1.5, 1.88, C.rust);
  callout(s, "County conclusion: this increase constituted an alteration/enlargement creating offsite hazard or nuisance, adversely affecting neighborhood character, or intensifying land/service needs under 4-1003.C.1.d.", 7.38, 3.45, 4.7, 0.95, C.rust);
  s.addText("Caution: CEMEX’s Landis report disputes the methodology and argues traffic should be compared to pre-1994 volumes, not one month before/after quarry closure.", { x: 7.6, y: 4.92, w: 4.65, h: 0.55, fontSize: 10, color: C.charcoal, margin: 0, fit: "shrink" });
  addFooter(s, "Sources: Boulder County April 10, 2024 Notice; Stantec Access Traffic Study as summarized in Notice; Landis Evans report, Nov. 5, 2024.");
}

// 7
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Structural and Capacity Evidence");
  title(s, "The record also points to post-baseline physical and capacity changes");
  band(s, 0.65, 1.12, 3.85, 4.88, C.white);
  s.addText("1997-2000 expansion", { x: 1.0, y: 1.48, w: 2.6, h: 0.25, fontSize: 14.5, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "$10.3M “Lyons Plant Expansion” / “Capacity Increase” project alleged in archive materials.",
    "Claimed clinker capacity increase from 450,000 to 575,000 tons per year.",
    "Raw mill, kiln, finish mill, baghouse/separator, and oxygen-plant related changes.",
  ], 1.05, 1.92, 2.9, 1.75, { size: 11 });
  stat(s, "+28%", "claimed capacity increase", 1.22, 4.36, 2.45, C.rust);
  band(s, 4.8, 1.12, 3.85, 4.88, C.white);
  s.addText("2002-2024 structures", { x: 5.15, y: 1.48, w: 2.55, h: 0.25, fontSize: 14.5, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "2025 air-photo study identifies at least ten structural changes visible in aerial imagery.",
    "Examples include hoppers/sheds, tank removals/additions, tower removal, stack/scrubber-related changes.",
    "Earlier 2023 visual evidence flags clinker storage, mobile equipment shed, stack, lime/carbon silos, and preheater alterations.",
  ], 5.2, 1.92, 2.95, 2.08, { size: 10.8 });
  stat(s, "10+", "aerially identified changes", 5.42, 4.36, 2.45, C.river);
  band(s, 8.95, 1.12, 3.72, 4.88, C.ink, C.ink);
  s.addText("Legal relevance", { x: 9.28, y: 1.48, w: 2.4, h: 0.25, fontSize: 14.5, bold: true, color: C.white, margin: 0 });
  s.addText("Even if the County currently found traffic strongest, the structural/capacity record supplies independent grounds for further findings under 4-1003.C.1.a, b, c, and d.", {
    x: 9.28, y: 2.04, w: 2.76, h: 1.45, fontSize: 15, bold: true, color: "F4EFE6", margin: 0, fit: "shrink",
  });
  s.addText("Steelman position: the Board should not limit the case to traffic if the record shows earlier, unpermitted, post-1994 enlargements.", { x: 9.28, y: 4.3, w: 2.9, h: 0.72, fontSize: 10.5, color: "DADFD9", margin: 0, fit: "shrink" });
  addFooter(s, "Sources: “The 1997-2000 Lyons Plant Expansion Project”; CEMEX air-photo study report, Feb. 4, 2025; Visual Evidence of New Structures, Sept. 2, 2023.");
}

// 8
{
  const s = pptx.addSlide();
  addCaseHeader(s, "EPA and Air Record");
  title(s, "Federal air enforcement supports the “more than routine maintenance” narrative");
  s.addImage({ path: img("CEMEX_MJ25516-1.jpg"), x: 0.65, y: 1.1, w: 4.6, h: 4.8, sizing: { type: "cover", w: 4.6, h: 4.8 } });
  band(s, 5.65, 1.1, 6.95, 4.8, C.white);
  bullets(s, [
    "U.S. amended complaint alleged Clean Air Act violations at the Lyons facility, including failure to obtain PSD/NNSR permits and install controls for NOx and particulate matter.",
    "The 2013 Consent Decree recites EPA’s 2007 Notice of Violation and required CEMEX to pay a $1,000,000 civil penalty.",
    "The record identifies a cement plant with major regulated pollutants, not a low-impact legacy use.",
    "Operating permit 95OPBO082 renewed in 2025 confirms ongoing cement-production permitting obligations through 2030.",
  ], 6.05, 1.55, 5.5, 2.7, { size: 11.8 });
  callout(s, "Air enforcement does not itself prove local land-use termination. It does strengthen the argument that post-baseline changes were material, regulated, and publicly consequential.", 6.02, 4.72, 5.75, 0.62, C.rust);
  addFooter(s, "Sources: U.S. v. CEMEX Amended Complaint, 2009; 2013 Consent Decree; Colorado Operating Permit 95OPBO082 renewed Feb. 1, 2025.");
}

// 9
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Dowe Flats and Public Promises");
  title(s, "The equity story: the community was promised transition, not indefinite escalation");
  band(s, 0.65, 1.06, 5.25, 4.95, C.white);
  s.addText("Dowe Flats record", { x: 1.0, y: 1.42, w: 2.4, h: 0.25, fontSize: 14.5, bold: true, color: C.ink, margin: 0 });
  bullets(s, [
    "1994 approval materials are framed around a 25-year life-of-mine and reclamation period.",
    "Resolution 2022-075 denied a requested 15-year extension for Dowe Flats mining and reclamation.",
    "Public comments raised air quality, CO2, traffic, dust, and visual impacts.",
    "CEMEX’s proposed exchange offered land/value while securing 15 more years of mining and plant operations.",
  ], 1.05, 1.9, 4.22, 2.48, { size: 11.5 });
  stat(s, "15 yrs", "extension denied", 1.08, 4.72, 1.55, C.rust);
  stat(s, "44", "public speakers noted", 2.82, 4.72, 1.55, C.river);
  s.addImage({ path: img("st vrain lyons.jpeg"), x: 6.42, y: 1.06, w: 5.85, h: 4.95, sizing: { type: "cover", w: 5.85, h: 4.95 } });
  s.addShape(pptx.ShapeType.rect, { x: 6.42, y: 5.11, w: 5.85, h: 0.9, fill: { color: C.ink, transparency: 8 }, line: { color: C.ink } });
  s.addText("Steelman equity point: zoning enforcement is the mechanism that keeps a grandfathered industrial operation from converting community tolerance into a permanent growth entitlement.", { x: 6.75, y: 5.34, w: 5.1, h: 0.28, fontSize: 11.4, bold: true, color: C.white, margin: 0, fit: "shrink" });
  addFooter(s, "Sources: Dowe Flats “Broken Promise” presentation; Boulder County Resolution 2022-075 denying SU-22-0003; public-comment record.");
}

// 10
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Counterarguments");
  title(s, "CEMEX’s best defenses, and why the County can still prevail");
  const left = [
    ["Baseline", "CEMEX: compare current traffic to pre-1994, not June 2022."],
    ["Traffic", "CEMEX: traffic is an effect of use, not the land use itself."],
    ["Safety", "CEMEX: crash data does not show unusual hazards at the access."],
    ["Takings", "CEMEX: termination is an excessive regulatory deprivation."],
  ];
  const right = [
    ["Response", "The use changed when adjacent quarry/conveyor supply was replaced by outside trucked raw material."],
    ["Response", "4-1003.C.1.d expressly covers alterations with offsite hazard, nuisance, neighborhood, or service impacts."],
    ["Response", "The Code does not require a crash epidemic; threatened hazards and nuisance impacts are enough."],
    ["Response", "No vested right exists to expand a nonconforming use beyond its legal scope."],
  ];
  for (let i = 0; i < 4; i++) {
    const y = 1.22 + i * 1.28;
    band(s, 0.75, y, 5.65, 0.92, C.white);
    chip(s, left[i][0], 1.0, y + 0.23, 1.08, C.gray);
    s.addText(left[i][1], { x: 2.28, y: y + 0.26, w: 3.62, h: 0.24, fontSize: 11, color: C.ink, margin: 0, fit: "shrink" });
    band(s, 6.92, y, 5.65, 0.92, i === 0 ? "F9EFEA" : C.white);
    chip(s, right[i][0], 7.16, y + 0.23, 1.08, i === 0 ? C.rust : C.river);
    s.addText(right[i][1], { x: 8.44, y: y + 0.2, w: 3.58, h: 0.34, fontSize: 11, bold: i === 0, color: C.ink, margin: 0, fit: "shrink" });
  }
  callout(s, "Public-facing credibility comes from conceding the hard points while showing why they do not defeat the enforcement theory.", 1.05, 6.34, 10.75, 0.38, C.moss);
  addFooter(s, "Sources: CEMEX May 9 and Nov. 7, 2024 letters; Stantec Nov. 7, 2024 memo; Landis Evans Nov. 5, 2024 report; GNL/SOSVV July and Dec. 2024 letters.");
}

// 11
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Steelman Legal Argument");
  title(s, "The strongest public brief fits in six propositions");
  const props = [
    ["1", "The plant is legal only because it predates current zoning."],
    ["2", "Boulder County warned CEMEX that enlargement or alteration would terminate that protection."],
    ["3", "The record shows post-baseline capacity, physical, and operational changes."],
    ["4", "The closure of Dowe Flats changed the plant’s raw-material logistics and intensified truck impacts."],
    ["5", "Article 4-1003.C.1.d reaches alterations with offsite hazard, nuisance, neighborhood, or service impacts."],
    ["6", "Termination enforces the limits of a grandfathered use; it does not confiscate a right CEMEX never had."],
  ];
  props.forEach((p, i) => {
    const x = i < 3 ? 0.8 : 6.9;
    const y = 1.12 + (i % 3) * 1.55;
    s.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.58, h: 0.58, fill: { color: i === 5 ? C.rust : C.river }, line: { color: C.white, width: 1 } });
    s.addText(p[0], { x: x + 0.18, y: y + 0.13, w: 0.22, h: 0.12, fontSize: 11, bold: true, color: C.white, align: "center", margin: 0 });
    s.addText(p[1], { x: x + 0.82, y: y + 0.02, w: 4.55, h: 0.58, fontSize: 13.2, bold: true, color: C.ink, margin: 0, fit: "shrink" });
  });
  band(s, 1.02, 6.12, 11.05, 0.52, C.ink, C.ink);
  s.addText("Ask: affirm termination, require cessation or lawful discretionary approval, and preserve reclamation/public-health conditions during wind-down.", { x: 1.32, y: 6.29, w: 10.45, h: 0.16, fontSize: 10.8, bold: true, color: C.white, align: "center", margin: 0, fit: "shrink" });
  addFooter(s, "Synthesis of cited record and Boulder County Land Use Code Article 4-1003.");
}

// 12
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Public Simplification");
  title(s, "What this means for Boulder County residents");
  s.addImage({ path: img("lyons_town.jpeg"), x: 0, y: 0, w: W, h: H, transparency: 30, sizing: { type: "cover", w: W, h: H } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.paper, transparency: 14 }, line: { color: C.paper } });
  band(s, 0.75, 1.2, 3.7, 4.65, C.white);
  band(s, 4.83, 1.2, 3.7, 4.65, C.white);
  band(s, 8.9, 1.2, 3.7, 4.65, C.white);
  s.addText("Not anti-business", { x: 1.05, y: 1.62, w: 2.8, h: 0.28, fontSize: 16, bold: true, color: C.river, align: "center", margin: 0 });
  s.addText("This is a rule-of-law argument: grandfathered rights are limited to the historic use.", { x: 1.15, y: 2.22, w: 2.65, h: 0.8, fontSize: 14.2, bold: true, color: C.ink, align: "center", margin: 0, fit: "shrink" });
  s.addText("Not just traffic", { x: 5.16, y: 1.62, w: 2.75, h: 0.28, fontSize: 16, bold: true, color: C.rust, align: "center", margin: 0 });
  s.addText("Traffic is evidence of a deeper operational shift: replacing adjacent quarry supply with regional truck delivery.", { x: 5.26, y: 2.22, w: 2.62, h: 0.92, fontSize: 14.2, bold: true, color: C.ink, align: "center", margin: 0, fit: "shrink" });
  s.addText("Not sudden", { x: 9.32, y: 1.62, w: 2.15, h: 0.28, fontSize: 16, bold: true, color: C.moss, align: "center", margin: 0 });
  s.addText("The record spans decades: County letters, permits, federal enforcement, public comments, studies, and aerial evidence.", { x: 9.55, y: 2.22, w: 2.1, h: 1.05, fontSize: 14.2, bold: true, color: C.ink, align: "center", margin: 0, fit: "shrink" });
  addFooter(s, "Public explanation slide based on the document archive and cited legal record.");
}

// 13
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Evidentiary Record");
  title(s, "How the public can audit the case");
  band(s, 0.7, 1.1, 12.0, 4.9, C.white);
  const rows = [
    ["Legal authority", "Boulder County Land Use Code Article 4-1003; Oct. 8, 2002 County letter; April 10, 2024 Notice"],
    ["Operational change", "Dowe Flats expiration; Stantec traffic study; CEMEX/Landis response; GNL/SOSVV letters"],
    ["Physical changes", "1997-2000 expansion memo; 2023 visual evidence; 2025 air-photo study"],
    ["Air/public health", "U.S. v. CEMEX amended complaint; 2013 Consent Decree; Title V permit 95OPBO082; emissions CSV"],
    ["Equity/reclamation", "Dowe Flats Resolution 94-81 materials; Resolution 2022-075; public comments and correspondence"],
  ];
  rows.forEach((r, i) => {
    const y = 1.48 + i * 0.84;
    s.addShape(pptx.ShapeType.rect, { x: 1.05, y, w: 2.6, h: 0.44, fill: { color: i % 2 ? C.pale : "EAF2F0" }, line: { color: C.line } });
    s.addText(r[0], { x: 1.22, y: y + 0.14, w: 2.2, h: 0.1, fontSize: 9.2, bold: true, color: C.ink, margin: 0, fit: "shrink" });
    s.addText(r[1], { x: 3.92, y: y + 0.12, w: 7.9, h: 0.14, fontSize: 9.6, color: C.charcoal, margin: 0, fit: "shrink" });
  });
  callout(s, "Recommendation: publish the slide deck alongside the repository index, timeline, and primary documents so residents can verify every premise.", 1.05, 5.42, 10.65, 0.38, C.river);
  addFooter(s, "Sources: README.md, INDEX.csv, TIMELINE.md, and cited document folders in the CEMEX Lyons archive.");
}

// 14
{
  const s = pptx.addSlide();
  s.background = { color: C.ink };
  s.addImage({ path: img("town_lyons.jpg"), x: 0, y: 0, w: W, h: H, transparency: 28, sizing: { type: "cover", w: W, h: H } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.ink, transparency: 12 }, line: { color: C.ink } });
  s.addText("Bottom Line", { x: 0.72, y: 0.78, w: 2.2, h: 0.32, fontSize: 14, bold: true, color: C.gold, margin: 0, charSpacing: 0.4 });
  s.addText("Boulder County has a strong, principled basis to terminate CEMEX Lyons’ nonconforming status.", {
    x: 0.72, y: 1.38, w: 7.25, h: 1.25, fontFace: "Georgia", fontSize: 28, bold: true, color: C.white, margin: 0, fit: "shrink",
  });
  s.addText("The strongest case is not that one data point is perfect. It is that the whole record shows a grandfathered heavy-industrial operation moving beyond the historic limits Boulder County allowed: physically, operationally, and in its impacts on the surrounding community.", {
    x: 0.76, y: 3.2, w: 6.7, h: 1.05, fontSize: 15.3, color: "F3F2EA", margin: 0, fit: "shrink",
  });
  s.addText("Affirm termination. Require lawful approval for any future use. Protect residents during wind-down and reclamation.", { x: 0.78, y: 5.45, w: 7.3, h: 0.36, fontSize: 15, bold: true, color: C.gold, margin: 0, fit: "shrink" });
  s.addText("Prepared from public archive materials; verify against original documents before filing or official publication.", { x: 0.78, y: 6.85, w: 6.2, h: 0.18, fontSize: 7.6, color: "D0D6D2", margin: 0 });
}

// 15
{
  const s = pptx.addSlide();
  addCaseHeader(s, "Selected Sources");
  title(s, "Selected source documents used for this synthesis", { size: 23 });
  bullets(s, [
    "Boulder County Community Planning & Permitting, Notice of Termination of Nonconforming Status, April 10, 2024.",
    "Boulder County Land Use Department letter to CEMEX, October 8, 2002.",
    "Boulder County Land Use Code Article 4-1003; Land Use Code Article 4 excerpts in archive.",
    "Stantec Access Traffic Study materials and November 7, 2024 Stantec supplemental memo.",
    "Landis Evans + Partners, CEMEX Lyons Plant Traffic Study, November 5, 2024.",
    "GNL/SOSVV letters to Dale Case, July 9, 2024 and December 20, 2024.",
    "U.S. v. CEMEX amended complaint, 2009; CEMEX/EPA Consent Decree, 2013.",
    "CEMEX air-photo study report, February 4, 2025; Visual Evidence of New Structures, September 2, 2023.",
    "Boulder County Resolution 2022-075 denying SU-22-0003; Dowe Flats archive materials.",
    "INDEX.csv, TIMELINE.md, and repository README files.",
  ], 0.9, 1.25, 11.5, 4.8, { size: 10.7, space: 3 });
  addFooter(s, "This deck is a synthesis and public-education aid. It should be checked against original PDFs before legal filing or publication.");
}

pptx.writeFile({ fileName: out });
