# Larimer Quarry (M-1977-341): tonnage and mining-activity analysis

Analysis of the DRMS imaged records already filed in this folder (prepared 2026-09-30). It is a reading aid, not a primary document. Every figure below is taken from a DRMS or CDPHE document in this repository; check the cited page before quoting.
The CSV companion is `Larimer_Quarry_Tonnage_Analysis_2026-09-30.csv` (`repo_path` column = location of the source PDF).

**Source-file naming.** Source names in this note use the DRMS file stem, e.g. `1996-08-30_REPORT`. The matching file in this repository is `Reports/1996-08-30_REPORT - M1977341.pdf` (likewise `Revisions/`, `Inspections/`, `Permit/`, `General_Documents/`). Files with a number in parentheses, such as `_INSPECTION (3)`, are `Inspections/_INSPECTION - M1977341 (3).pdf`.

## 0. "Larimer Quarry" is not permit M-1977-208

| Permit | Name in DRMS records | County | Operator history |
|---|---|---|---|
| **M-1977-341** | **Larimer County Quarry, also called the Parrish Quarry**, about 195-196 permitted acres (208.8 after a 1987 amendment) | Larimer, Sec. 35-36 T4N R70W, about 7 miles SW of Berthoud | Martin Marietta Cement (1978-83); Southwestern Portland Cement (1984-96); Southdown (1996-2001); CEMEX (8/17/2001 on) |
| **M-1977-208** | **Lyons Quarry** (pits A-E, plus C-Pit used for CKD disposal) | Boulder | same operators, now CEMEX |

- The same plant filed annual reports for M-1977-208, M-1977-341, M-1977-361 (Silica Quarry) and M-1993-041 (Dowe Flats) together.
- This folder holds the DRMS imaged records for M-1977-341 (see `DRMS Larimer County.pdf`, the imaged-documents request form dated 12/26/2024).
- Everything below about "the Larimer Quarry" is M-1977-341. Section 6 separately lists Lyons Quarry (M-1977-208) statements about the end of mining there.
- The state "Production Report" PDFs published by DRMS cover coal and metal mines only; they contain no Lyons, CEMEX or Larimer entries.

## 2. Bottom line on tonnage

1. **The DRMS annual reports for the Larimer County Quarry contain no tonnage field, and none of the 54 files reports tons or cubic yards.** These are construction-materials (112c) reports. They report acres affected, acres reclaimed, seeding, and so on.
   - **A year-by-year tons-mined table cannot be built from these records. Every annual tonnage is MISSING.**
   - The CSV and the table in section 3 use acres as the activity proxy.
2. **Only two tonnage figures exist for this quarry:**
   - **Plan (1977 application, PDF p.14 of the 117-page Permit File (2)):** "Approximately 150,000 tons of ore will be mined through 1978. From then, 100,000 tons of ore will be mined for the duration of the mine."
   - **DMG estimate, 12/6/2002 full-release inspection, p.2:** "Approximately 250,000 tons of limestone has been mined from the site. Mining and reclamation occurred concurrently until the mid-1990's."
   - The DMG estimate is a cumulative figure with no method given. It is low against the plan: 100,000 tons/yr over about 19 years would be about 1.9 million tons. Treat it as unverified.
3. Other tonnage numbers in the records are **not** for this quarry:
   - Lyons pits, 1995 (CDPHE): 684,919 tons
   - Dowe Flats plan: 760,000 tons/yr
   - Weaver, Wyoming: 50,501–651,482 tons/yr
   - See section 5.
4. No "unit conversion" problem exists for the Larimer County Quarry. There is no tons-versus-cubic-yards mixing because neither unit appears. The only conversion issue is acres against tons (see anomalies, section 7).

## 3. Year-by-year table, M-1977-341 (acres as the proxy; tons MISSING for every year)

Report years run roughly June to June. "Filed" is the date on the document. Page numbers are PDF pages. Acres come from OCR of old scans, so verify against the PDFs before quoting them.

| Report year | Filed | Tons | Acres opened or affected | Major disturbance (ac) | Reclaimed in year (ac) | Reclaimed to date (ac) | Source (file stem; p.) | Notes |
|---|---|---|---|---|---|---|---|---|
| 1978–79 | no report in file | PLAN 100–150k | plan: 5/yr | | | | Permit File (2), p.14 | Planned only. Hauled about 10 miles to the Lyons plant. |
| 1979–80 | 7/8/1980 | MISSING | 3.67 (H) | 20.19 (+4.27 moderate) | 0 | | `1980-07-08_REPORT` p.2 | "No reclamation took place in this reporting period." Says permit issued "6-24-78"; other reports say 6/4/78. |
| 1980–81, 1981–82 | not in file | MISSING | | | | | | Gap. |
| 1982–83 | 7/12/1983 | MISSING | **0** | 20.29 | 0 | 24.39 | `1983-07-12_REPORT` p.1 | "There are no newly disturbed areas for the 6-82 to 6-83 reporting period." |
| 1983–84 | 7/24/1984 | MISSING | 3.08 (J) | 20.03 | 3.34 (F) | 27.73 | `1984-07-24_REPORT` p.2 | |
| 1984–85 | not in file | MISSING | | | | | | DRMS index shows a 7/30/1985 report. |
| 1985–86 | 7/14/1986 | MISSING | 7.78 (V) | 25.99 | 3.35 (U) | 37.62 | `1986-07-14_REPORT` p.3 | Largest new opening of the 1980s. |
| 1986–87 | 7/20/1987 | MISSING | 5.53 (W) | 23.50 | 9.33 | 46.95 | `1987-07-20_REPORT (3)` p.5–6 | Parrish amendment submitted. |
| 1987–88 | 7/27/1988 | MISSING | 9.9 (BB 3.1 + PP 6.8) | 23.21 | ~10.2, plus 2.4 mined and reclaimed in the same period | 59.54 | `1988-07-27_REPORT (2)` p.2 | First year incl. Parrish (amendment approved 9/25/1987). |
| 1988–89 | 5/15/1989 | MISSING | none stated | 10.83 | 13.31 | 72.85 | `1989-05-15_REPORT` p.2 | Plan: open 3 ac in Pit B. |
| 1989–90 | 6/19/1990 | MISSING | 2.0 (CC) | 12.83 | 0 | 72.85 | `1990-06-19_REPORT` p.2 | "No areas were reclaimed in the 1989-90 reporting period." |
| 1990–91 | 7/1/1991 | MISSING | 6.7 (DD, EE, FF) | 13.53 | 6.0 (PP) | 78.85 | `1991-08-28_REPORT` p.3–4 (same narrative as `1991-07-01_REPORT`) | The 7/1/1991 file itself is map-only OCR. |
| 1991–92 | 9/4/1992 | MISSING | FF 5.0 | 13.73 | 0.8 (+2 ac CC in progress) | 79.65 | `1992-09-04_REPORT` p.1–3 | Form shows a $28,000 financial warranty. "Permitted acreage" reads "16" in OCR (probably 196). |
| 1992–93 | not in file | MISSING | | | | | | DRMS index shows a 9/1/1993 report. Gap. |
| 1993–94 | 9/8/1994 | MISSING | 10.5 (A3 7 + B1 3.5) | 10.5 | 27.03 (form) | 27.0 seeded (form) | `1994-09-08_REPORT (2)` p.1, 3 | Temporary cessation: NO (circled). Next-year plan: "continuation of mining in areas B1 and A3; and initiation of mining on 2 acres in area A3". |
| 1994–95 | 9/6/1995 | MISSING | 15 (form); B1 4.5 | 4.5 | 6.5 | backfilled 22.4; graded 19.1; seeded 11.8 | `1995-09-06_REPORT` p.1, 3 | Temporary cessation: NO. Plan: "continuation of mining in section B1". |
| **1995–96** | 8/30/1996 | MISSING | 15 (form); B1 expanded to 8.7 | 8.7 | **30.9** (A3 8.5 + A7 19.1 + B2 3.3 complete) | not stated | `1996-08-30_REPORT` p.1–2 | **Last annual report saying mining continues**: "continue mining section B1". |
| 1996–97 | 8/22/1997 | MISSING | map: A3, A7, B1, B2 "RECLAMATION COMPLETE", 39.6 ac | B1 8.7 | | | `1997-08-22_REPORT` p.1 | Map and cover letter only. The 5/21/1997 letter says mining has ceased (section 4). |
| 1997–98 | 9/9/1998 | MISSING | 40 affected | | 40 | 40 seeded | `1998-09-09_REPORT` p.1–2 | Next-year acres: 0. "Reclamation is complete for the Parrish Quarry." Extraction-ceased date "N/A"; temporary cessation unmarked. |
| 1998–99, 1999–2000, 2000–01, 2001–02 | 9/13/1999, 9/11/2000, 9/7/2001, 10/16/2002 | MISSING | 0 | | | | `1999-09-13` p.3; `2000-09-11` p.4; `2001-09-07` p.2; `2002-10-16` p.2 | Same sentence each year: "Reclamation is complete for the Parrish Quarry." "…have not been released from bond to date." |
| 2002–03 | 9/5/2003 | MISSING | 0 | | | | `2003-09-05_REPORT` p.4 | "We will begin the process to release the property from bonding." |
| 2003–04 | 9/2/2004 | MISSING | 0 | | | | `2004-09-02_REPORT` p.6 | "The Parrish Quarry is in the process of bond release. The final evaluation… is scheduled September 1st, 2004." |
| 2004–05 | 9/30/2005 | MISSING | 0 | | | | `2005-09-30_REPORT` p.3 | "The final five acres that have yet to be bond released…" Fee $688. |
| 2005–06 | 9/5 and 9/27/2006 | MISSING | | | | | `2006-09-05` and `2006-09-27` | Fee forms and receipts only for M-1977-341; no narrative found. |
| 2006–07 | 9/17/2007 | MISSING | 0 | | | | `2007-09-17_REPORT` p.2 | "The Parrish Quarry has started the bond release process, and we hope to have the bond released by the end of calander year 2007." Fee $791. |
| 2007–08 | n/a | n/a | | | | | `2008-07-18_REVISION` p.1 | Released 6/18/2008; $28,000 bond returned (section 4). |

**Bond history:**
- $28,000 (1992 form); this matches the $28,000 bond released in 2008 (amount read from the scan, not typed text).
- A 5/7/1997 reclamation cost estimate gave $26,725 as the bond amount.
- Annual fee: $350 (1980–89) → $550 (1994–99) → $688 (2000–06) → $791 (2007).

## 4. Key statements, with quotes and page references

**Last year of mining (M-1977-341)**
- 1996 annual report (`1996-08-30_REPORT`, p.2, covering June 1995–June 1996): "Section B1, the mining and stripping area expanded to 8.7 acres… Our plans for the June 1995 - June 1996 reporting period are to continue mining section B1."
- DMG inspection 5/1/1997 (`_INSPECTION (3)`, p.2): "According to the 1996 Annual Report Map, Southdown was still inside the boundaries when they mined down the edge of the western ridge." And: "The bond will be recalculated taking existing conditions into account, and the lack of future excavation planned…"
- Operator letter 5/21/1997 (`1997-05-29_INSPECTION`, p.1): "Mining has now ceased on this property. Southdown has no intention of restarting this activity. Within 2 weeks all equipment should be off of the property…"
- DMG 12/6/2002 (`_INSPECTION (2)`, p.2): "Mining and reclamation occurred concurrently until the mid-1990's"; also "a review of the annual reports for this site indicates that mining in this quarry took place in the 1990's."
- **Conclusion: last documented mining was in the 1995–96 report year, possibly into spring 1997 (final pass at the western ridge). Extraction ended no later than May 1997.**
  - The 1997–98 report form nevertheless gives the extraction-ceased date as "N/A".
  - The 1998 form also leaves the Temporary Cessation line unmarked.

**Temporary cessation**
- 1994 and 1995 forms: "NO" circled (checked on the scanned images).
- 1996 form: the line is not legible in OCR. Not individually checked.
- 1998 form: neither box marked.
- **No temporary-cessation approval or notice was found in the Laserfiche files reviewed.** Not every Revisions file was read, so this is not exhaustive.

**Bond release and close-out**
- 2008-06-06 (Division of Water Resources, in `2008-06-06_REVISION`): "the mining operation at this site did not expose any groundwater."
- 2008-06-17 inspection (`2008-06-17_INSPECTION`, p.2): "[A company representative] stated the landowners intend to develop the mine site into residential lots and the 5-acre area will be converted into a lake."
- 2008-07-18 letter (`2008-07-18_REVISION`, p.1): on June 18, 2008 the Division "released CEMEX, Inc. from further responsibility for the Larimer County Quarry", and the $28,000 surety bond was released in its entirety.
- The permit is therefore **fully released and closed.**

**CKD and "last mining activity" (M-1977-341):** no Larimer County Quarry record mentions CKD or non-quarry fill, and no statement that CKD was the last mining activity was found.

## 5. Tonnage figures that exist for other sites, not the Larimer County Quarry

| Item | Tons | Source |
|---|---|---|
| Lyons pits, 1995 | 684,919 "material mined from pits at the Lyons facility in 1995. Some additional material was brought in from the [Lar]imer county pits. Pit C has about 18 months of limestone left to be mined then they will have to rely on Dowe Flats." | CDPHE air inspection, 5/14/1996, p.7 of 16 (`013-0003_1996 INSP RPT_12BO444-1-2_5 14 1996.pdf`, in `08_Operational_History_and_Traffic/1994_Operational_Baseline/`; see also the CDPHE inspection set in `05_Air_Quality_Permit_95OPBO082/`) |
| Plant kiln feed 1995 | 735,768 (p.5, p.10); clinker 455,400 (p.13) | same document |
| Dowe Flats | 760,000 tons/yr planned; "800,000 tons of limestone and shale are needed every year" | Dowe Flats plan documents (`04_Dowe_Flats_M1993041/`) |
| Lyons plant feed 2004-06 | 791,866 (2004), 739,260 (2005), 734,456 (2006) | `08_Operational_History_and_Traffic/Historical_Data/CEMEX Historical Data.xlsx`, tab "Exhibit - Feed to Clinker" |
| Weaver, Wyoming (external limestone to Lyons) | 50,501 (9/2018-2/2019); 245,778; 443,714; 441,615; 304,715; 128,417; 518,482; 651,482 (2/2025-2/2026; the 2026 report is marked "Under Review") | Wyoming permit PT0658 annual reports in `Z_Related_Other_CEMEX_Mines/Wyoming_Mine_PT0658/`; year-by-year table in `08_Operational_History_and_Traffic/Historical_Data/PT0658_Wyoming_Traffic_Calculations.csv` |

- **The 1995 statement is the only evidence found that Larimer County pits fed the Lyons plant in a specific year.** It gives no tonnage for them.
- The `CEMEX Historical Data.xlsx` workbook also carries a separate planning figure for Weaver limestone after 10/1/2022 (350,000 tons/yr) that differs from the annual-report tonnages above (304,715 for 2022-23, 128,417 for 2023-24, 518,482 for 2024-25 and 651,482 for 2025-26). The annual reports are the primary source; the workbook figure is not.

## 6. Lyons Quarry (M-1977-208) statements about the end of mining

Quoted from DRMS and CEMEX documents in `03_State_Mining_Permit_M1977208/` and `04_Dowe_Flats_M1993041/` (DRMS Laserfiche IDs shown as "LF").

| Date and document | Quote / data |
|---|---|
| 6/24/2004 DRMS inspection (LF 331238, p.3) | "Mining is complete at the Lyons Quarry. The site remains active because of the processing of limestone from the adjacent Dowe Flats mine (Permit M-1993-041)." |
| 2/5/2019 DRMS inspection (LF 1269069, p.2) | "While mining at the Lyons Quarry ceased many years ago, the cement plant continues to be fed by the operator's permitted quarry located north of CO-66... Dowe Flats Mine" |
| 3/10/2022 DRMS inspection (report dated 2022-03-03, p.2) | "While mining at this site ceased many years ago..." |
| CEMEX 2/8/2023 letter (LF 1382130, p.1) | "Throughout the life of the Lyons Quarry, raw materials have been trucked to the cement plant to greater and lesser degrees..." |
| 2007-08-31 revision (M-1977-208, p.9 and p.11) | Quotes a 2/19/1993 inspection that the western portion of C-Pit would be "mined out within two months", but notes that a June 1996 photo "shows active mining in the eastern portion of C-Pit". |
| CDPHE 5/14/1996 (p.7) | "Pit C has about 18 months of limestone left to be mined then they will have to rely on Dowe Flats." |
| 9/8/2022 M-1977-208 annual report | last activity 9/6/2022; 448.9 ac affected; 0.0 new; 0.8 reclaimed; bond $8,953,127 |
| 9/7/2026 M-1977-208 annual report (LF 1476326) | Final reclamation "No"; last activity 9/3/2026; temporary cessation "No"; 448.9 ac affected; 0.0 reclaimed; bond $21,288,785; operates >180 days "Yes" |

**No annual tonnage appears in the M-1977-208 annual reports either.** The 2022 and 2026 reports are web-form reports with no production fields. (See `13_2026_Plant_Status_and_Layoffs/` for the September 2026 report in context.)

**CKD:** CKD figures in the DRMS record are about 30,000 tons/yr (9/5/2002 DRMS inspection) and about 15,000 tons/yr sold as a binder (LF 331238 p.3, "Approximately 15,000 tons of CKD/year is sold as a binder..."). The deprecated tab of `CEMEX Historical Data.xlsx` shows CKD 20,000 tons for 2023. No DRMS document reviewed here describes CKD disposal as "the last remaining mining-related activity".

## 7. Observations, trends and anomalies

**Larimer County Quarry (M-1977-341): mining ended and the permit is closed.**
- Mining ended in the mid-1990s, with the last documented operator statement on 5/21/1997.
- DRMS stated that "mining in this quarry took place in the 1990's" and released the $28,000 bond on 6/18/2008.
- The acres-opened series shows the winding down: 7.78 ac opened in 1985-86, about 10 ac in 1987-88, 2 ac in 1989-90, then the final B1/A3 work in 1994-96, then 0 from 1997-98.

**Lyons Quarry (M-1977-208).**
- DRMS has described mining there as complete since at least 2004 (2004, 2019 and 2022 statements above). The 2026 annual report shows 0.0 new acres and 0.0 reclaimed; the permit stays open for CKD disposal and plant-site reclamation.
- Complicating facts: the 2007 revision quotes a June 1996 photo showing active mining in C-Pit although a 1993 inspection predicted the western part would be mined out within two months, so C-Pit mining ran later than that 1993 expectation, at least to mid-1996.
- The 9/7/2026 M-1977-208 report says last activity 9/3/2026 and operates >180 days "Yes". The form defines activity broadly ("excavation, processing or hauling"), so the entry does not by itself show any excavation.

**Other caveats**
- The 1998 Larimer form gives "N/A" for the extraction-ceased date and leaves the temporary cessation line unmarked.
- The temporary-cessation status of the 1995-96 form could not be confirmed from OCR. The 1993-94, 1994-95 and 1997-98 scans were checked visually.

**Anomalies:**
- The 250,000-ton lifetime estimate (12/6/2002) does not reconcile with the plan (100,000 tons/yr) or with about 80 reclaimed acres. No annual reports support either figure, so cumulative tons cannot be checked.
- The reclaimed-acre series is inconsistent. The 1992 report gives 79.65 ac reclaimed to date, but the 1994 form shows 27.0 ac reclaimed and "graded 4.5 / seeded 27.0". The 1995 form shows different cumulative fields (backfilled 22.4, graded 19.1, seeded 11.8). The forms appear to use different bases (a year's activity against cumulative). This is an inference.
- Permit issue date conflicts: 6/4/1978 (annual reports), 6/24/78 (1980 report), 10/26/1978 (2002 inspection). The `1978-10-26_REVISION - M1977341.pdf` in `Revisions/` is for a different permit ("Sterling Sand & Gravel... Johnson Pit"), apparently misfiled by DRMS.
- The 1977 application says the ore body is 14-16 ft (Pits A and B) and 36 ft (Pits C and D), hauled about 10 miles to the Lyons plant. These are not annual production figures.

## 8. Gaps and limits

- **No annual tonnage for the Larimer County Quarry exists in any record in this folder.** DRMS 112c annual reports do not collect it. Possible other sources (not checked): MSHA quarry production reports (the MSHA data reviewed for the Lyons plant has no Larimer or Parrish entry), company records of Martin Marietta, Southwestern or Southdown, CDPHE air-permit files, and Colorado construction-materials severance reports.
- Missing annual reports in the file: 1980-82 (1980-81, 1981-82), 1984-85 (DRMS index shows 7/30/1985), 1992-93 (DRMS index shows 9/1/1993), and the 2005-06 narrative.
- Not every Revisions, Inspections and General Documents file was opened. Read for this analysis: all 2008 close-out files, the 1997 and 2002-04 inspections, the 1977 application (tonnage and pit descriptions only), and the 1996-97 transfer and bond files. No temporary-cessation approval or notice was found in the files read, but that is not exhaustive.
- The 54 annual-report files were OCR'd with `pdftotext`. Acreage numbers are OCR and the 1986-91 scans are noisy; verify against the PDFs before quoting.

