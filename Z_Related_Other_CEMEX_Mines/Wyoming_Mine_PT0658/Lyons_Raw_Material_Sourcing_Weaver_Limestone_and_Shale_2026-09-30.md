# Lyons raw-material sourcing: Weaver (limestone only), shale sources, stockpiles, haul-cost sensitivity

Compiled 2026-09-30 from public sources only. Legend: **[V]** verified in a primary or public document (cited); **[I]** inference (reasoning stated); **[NP]** not public / not found.
Related: `Z_Related_Other_CEMEX_Mines/Arcosa_M1988108/Arcosa_Boulder_Shale_to_Lyons_Analysis_2026-09-30.md` (Arcosa facts). The sensitivity inputs are in `Lyons_Shale_Haul_Cost_Sensitivity_ESTIMATE_2026-09-30.csv` (same folder); the figures in it are estimates, not from any CEMEX or hauler document.

## 0. Summary
1. **Current shale source: [NP].** No public document names a shale source for Lyons after Arcosa went idle on 1/12/2026. The last documented source is Arcosa (DRMS inspections of 2/13/2023 and 3/2025; CEMEX's 9/23/2024 moisture table to CDPHE lists "Arcosa Shale").
2. **Weaver does not produce shale [V].** Permit PT0658 is limestone only (Wyoming LQD GIS mineral code "LI"; CEMEX's annual report is titled "Weaver Limestone Quarry", commodity limestone, no shale). The Wyoming *shale* permits near Laramie belong to Mountain Cement / Eagle Materials.
3. **Distance.** Road distance Weaver to the Lyons plant is about **87 road miles** (OSRM routing, 9/30/2026) [I on the exact route]. Weaver is in **Albany County**, Wyoming. Some public advocacy materials describe Weaver as about 250 miles away; routing does not support that figure.
4. **Haul cost of a shale-source change alone is small [I].** Swapping a ~25-40 mile shale haul for a ~90-100 mile haul adds roughly $0.5-3.3 per ton of cement (0.4-2.3% of mill value) at 5-15% shale in kiln feed. This is an estimate; it says nothing about any CEMEX decision.

## 1. Evidence on the current / most recent shale source
| Item | Status | Source |
|---|---|---|
| Arcosa is the shale source | [V] (as of 2/2023 and 3/2025) | DRMS M-1977-208 inspections (site visits 2/13/2023 and 3/2025, the latter signed 3/21/2025, p.2): "Shale material is being sourced from the Arcosa mine in Jefferson County, sandstone, limestone, and gypsum are being sourced from their sandstone quarry and other quarries in Larimer County. Iron material is from the mid-west." (`03_State_Mining_Permit_M1977208/`) |
| CEMEX lists "Arcosa Shale" as a distinct feed, moisture 6.1% (9/23/2024) | [V] | CDPHE Title V renewal INFO_TO_SUPP, p.38 (`05_Air_Quality_Permit_95OPBO082/`): the same table lists Weaver Limestone 2.3%, Sandstone 0.5%, Iron 3.4%, Gypsum 2.1%, Coal 25.3%, Pozzolan 1.4%, Owl Canyon 0.1% (Owl Canyon is a Larimer County limestone quarry) |
| Arcosa idle since 1/12/2026; MSHA "Intermittent" 7/22/2026 | [V] | Arcosa CDPHE semiannual report filed 7/29/2026; MSHA Mines.txt |
| Arcosa quarry hours Q1 2026 -64% / Q2 2026 -86% year over year | [V] data; meaning [I] | MSHA MinesProdQuarterly (see the Arcosa note) |
| Who replaced Arcosa | **[NP]** | No DRMS, CDPHE, Boulder County, MSHA, SEC or news document reviewed names a replacement. CEMEX's 9/7/2026 DRMS annual report has no material-source statement. |
| Lyons plant still operating through mid-2026 | [V] | MSHA subunit 30 (mill) hours: 2025 228,247 hrs / 101 employees; 2026 H1 109,435 hrs / 105 employees. Kiln APEN received 4/27/2026: 2025 actual kiln feed 506,800 t, clinker 316,747 t. |

The plant may not need a *new* shale source yet because of stockpiles (section 4), and Arcosa was selling until 1/2026, so shale stockpiled before then could cover months [I].

## 2. Does Weaver Quarry produce shale? No [V]
- **Wyoming DEQ Land Quality Division GIS** (public ArcGIS REST, layer "Active Permits", queried 9/30/2026; https://gis.deq.wyo.gov/arcgis/rest/services/LQD_DATA/Permits/FeatureServer/2): **PT0658, "WEAVER", Cemex Construction Materials South, LLC, Albany County, MINERAL = "LI" (limestone), Active, approved 2/29/1996, 1,415.6 GIS-acres.**
- **CEMEX's Permit #658 Annual Report (2/28/2021-2/27/2022, prepared 2/25/2022)** (scanned, 8 pages, read from page images; also in this folder as `PT658 2021-2022 Annual Report.pdf`): title "Weaver Limestone Quarry"; commodity "Limestone"; 441,615 t mined that year, 8,081,354 t since the 1996 startup; geology "limestone layers 9-20 ft thick"; overburden is stockpiled for reclamation, not sold. No shale commodity or production. The later annual reports in this folder (through the 2026 report, marked "Under Review") describe hauling "crushed limestone ... to the Lyons Cement Plant" by contract belly-dump trucks.
- **MSHA:** there is no separate MSHA mine ID for Weaver Quarry. The only MSHA record tied to it is a contractor "Portable Crusher number 1" (ID 4801879, Loudwire Diesel LLC, SIC "Lime", opened 4/19/2024; directions reference the CEMEX Weaver quarry on the east side of US-287) with status **Abandoned as of 8/24/2026**. [I] A crushing contractor at Weaver closed its MSHA file in late August 2026; this could mean the contract ended; it is not proof of anything about Lyons.
- Weaver is about 11 mi south of I-80/US-287 on the east side of US-287 (MSHA directions). Road distance Weaver to the Lyons plant: **about 87 mi / about 1 h 54 min** (OSRM routing 9/30/2026) [I on exact route].
- The Wyoming **shale** permits in the area are **Mountain Cement Co. (Eagle Materials)**, not CEMEX: PT0648 Bath Shale Quarry (SH, Active, 771 acres, approved 9/28/1993) and PT0300 Monolith (SH, Active, 224 acres, approved 3/26/1975), per the same LQD GIS layer. Mountain Cement says it operates "2 limestone quarries, 2 shale quarries and a gypsum quarry" (https://www.mountaincement.com/our-company/). City of Laramie council packet 7/19/2016 (https://www.cityoflaramie.org/AgendaCenter/ViewFile/Item/787?fileID=1097): Mountain Cement said its shale "is only useful to MCC for the purpose of manufacturing cement". [I] Eagle has no obvious reason to sell shale to a competitor, but nothing public rules it out. A CEMEX-Eagle shale arrangement, if any, would show up only in private contracts or trucking records: [NP].
- Wyoming Air Quality Division permit files for Weaver were **not reached** [NP - not checked].

**Conclusion:** Weaver is a limestone-only source. Public statements that CEMEX trucks "100% of limestone and shale from a quarry in Wyoming" are not supported for shale by any primary document reviewed: nothing public shows shale coming from Wyoming.

### Weaver tons mined per annual report (primary: PT0658 annual reports in this folder)
50,501 (9/2018-2/2019, partial); 245,778; 443,714; 441,615; 304,715; 128,417 (includes a -43,640 reclassification); 518,482; 651,482 (2/2025-2/2026; report marked "Under Review"); cumulative 9,697,251. "Mined" is not the same as "delivered to Lyons". A year-by-year table with truck-movement arithmetic is in `08_Operational_History_and_Traffic/Historical_Data/PT0658_Wyoming_Traffic_Calculations.csv`.

## 3. Candidate alternative shale/clay sources (no evidence any supplies Lyons)
Raw-mix context: the Lyons Title V permit (95OPBO082, renewed 2/1/2025, section I.1.1) says the plant stores "sources of silica, iron, alumina, limestone and various raw materials" in silos, delivered "via truck or rail" to the patio; condition 1.6 states "There shall be no mining of limestone/raw materials or overburden materials at the Lyons Quarry"; patio (P000) throughput is limited to 1,050,000 tpy, iron-containing material 50,000 tpy. **The permit text reviewed gives no raw-mix percentages or shale feed rate [NP].** CEMEX told CDPHE on 2/21/2023 that "Gypsum, sandstone, shale, bauxite, limestone, and other raw materials are delivered by trucks" and only coal/iron by rail (see `05_Air_Quality_Permit_95OPBO082/P050_Rail_Unloader_Analysis/`).

MSHA public file (Mines.txt, pulled 9/30/2026): shale and clay operations in CO/WY, distance = straight line from the Lyons plant:
| Source | Owner / status | Distance | Evidence for Lyons supply |
|---|---|---|---|
| Arcosa Boulder (0504415), Hwy 93, Jefferson County, Pierre Shale | Arcosa; idle 1/12/2026; MSHA Intermittent | ~21 mi (24 road) | [V] supplied through at least 3/2025; idle now |
| Church Harvey Mine (0500340), Hwy 93 near Golden (~1.5 mi south of Arcosa) | CMT Excavating Inc; Active; 3-5 employees; quarry hours 2019-2025 ~3.8-6.1k/yr | ~22 mi | [NP]. Commodity "Common Clays". Small. Not shown to supply CEMEX. DRMS file not reviewed |
| General Shale "Denver Plant 60 Clay Mines" (0500215), Jefferson County | Wienerberger/General Shale (brick); Intermittent 2/25/2026; 1 employee | ~36 mi | [NP]. Captive brick clay |
| Siloam Stone "Bedrock/Pinion" (0501371) and Fox Clay Pit (0502926), Pueblo County | Active / Intermittent | ~142-147 mi | [NP] |
| Mountain Cement (Eagle) Bath/Monolith shale, Albany County WY | Eagle Materials (competitor) | ~103-111 mi road | [NP]. See section 2 |
| CEMEX-owned Lyons/Dowe Flats shale on site | Lyons Quarry M-1977-208; Dowe Flats M-1993-041 (final reclamation) | on site | see section 4 |

No CEMEX-owned shale or clay mine exists in CO/WY in the MSHA data (CEMEX CO/WY MSHA records: Lyons Cement Plant 0500344; abandoned Sandstone Quarry 0500862, Boulder). **Not checked:** the Colorado DRMS permit search for small or unreported clay pits; Wyoming State Geological Survey shale resource maps.
Geology [V, DRMS]: the Dowe Flats application (1993) notes Pierre, Niobrara, Benton (Carlile/Greenhorn) and Lykins shales underlie the Lyons/Dowe Flats area, and the original quarry produced "limestone and shale" (~800,000 t/yr combined). Shale-bearing rock exists on CEMEX land, but no permit currently allows mining at Lyons (Title V condition 1.6; DRMS statements that mining is complete). DRMS approved the Dowe Flats SR-1 surety reduction on 9/15/2026 (see `13_2026_Plant_Status_and_Layoffs/`).

## 4. Stockpile evidence
- [V] Stockpiles of imported raw materials exist on the plant "patio": complaint ZON-23-0003 (1/2023; advocacy source, not verified by the County) says "new shale stockpiles ... typically several stories tall". DRMS inspectors observed "various stockpiles of material" on the 3/2025 visit (no size or tonnage). Patio handling is capped at 1,050,000 tpy and tracked by truck-scale records (CDPHE added a truck-trip/weight recording condition in 2025).
- [V] **On-site shale earmarked for C-Pit reclamation**: DRMS cost estimate (Task 012, 10/22/2024; 2024-11-21 revision to M-1977-208): "Shale from SE Corner of site to C-Pit", 36,067 CCY / **48,088 LCY, 2,100 lb/LCY (~50,500 short tons)**, $151,159. The 3/18/2024 response calls it a 2-ft "shale cap" for 14.9 acres (48,077 CY). [I] This is about one year of shale at ~10% of kiln feed, but it is bonded for reclamation use; whether it is a stockpile or in-place material is unclear.
- [I] Mass-balance hint: Weaver limestone **651,482 t mined Feb 2025-Feb 2026** versus **2025 actual kiln feed 506,800 t (all materials, dry)** (APEN 4/27/2026). At ~80% limestone (section 5) kiln limestone use would be ~405k t, plus Larimer County limestone on top, so Weaver tons mined exceed plausible 2025 kiln use by ~250k t. That is consistent with (a) a limestone inventory build, and (b) "mined" not equalling "delivered to Lyons". [I, unproven]
- Satellite imagery or APEN data for stockpile sizes: [NP - not pulled]. Quantity in stock and monthly inbound by material: [NP].

## 5. Raw-mix share for shale and implied tonnage
- **Lyons-specific raw-mix percentages: [NP]** (not in the Title V permit, TRD or APEN reviewed).
- Generic (not Lyons): Mountain Cement (Laramie) told the Wyoming EQC in case 07-4804 that "limestone constitutes 80 percent of the raw material needed for manufacture" (Final EQC Order paragraph 1); general cement-chemistry references put the argillaceous (clay/shale) share at roughly 10-20%, with corrective materials added as needed. This note uses **5-15% shale** as an illustrative range. [I]
- Implied Lyons shale tonnage (2025 kiln feed 506,800 t): 5% = 25k t; 10% = 51k t; 15% = 76k t per year. At ~32 t/load (CEMEX-reported average net load ~31.9 t, from a 11/13/2024 CDPHE record) that is ~800-2,400 loads/yr, about 3-10 loads/day over 250 days. [I]
- [I] A hypothetical 350,000 tpy of shale would be ~69% of 2025 kiln feed, which is not possible as a mix share. Statements that shale trucks make up the bulk of the plant's limestone-and-shale traffic are therefore not consistent with these numbers; limestone is the dominant tonnage.

## 6. Haul-cost sensitivity: ESTIMATE ONLY
Inputs:
- Distances: Arcosa to Lyons plant ~24 road mi (OSRM); Weaver to plant ~87 mi; Mountain Cement shale pits to plant ~103-111 mi. "Added one-way miles" used: **52 (low), 63 (central and high)**.
- Trucking cost per mile: ATRI 2025 average marginal cost **$2.336/mi** ($0.482 fuel, $1.854 non-fuel) (ATRI "Operational Costs of Trucking 2026 Update", via search summary; not opened). Diesel: EIA PADD 4 on-highway **$6.407/gal, week of 9/28/2026 versus $3.732 a year earlier** (via a republication of EIA data; the EIA page itself was not fetched). Central case scales ATRI's fuel component by 6.407/3.732 to **$2.68/mi**. The high case uses **$3.06/mi** (upper spot rate in a search summary) with a 25-t payload.
- Payload 32 t in low/central, 25 t in high; round trip (empty return), so cost per ton = 2 x $/mi x miles / payload.
- Cement price context: USGS Mineral Commodity Summaries 2026 average mill value ~$160/metric t (2025e) = ~$145/short ton. Clinker-to-cement factor ~0.9 [I].
- Clinker 316,747 t, kiln feed 506,800 t (2025 actuals, APEN received 4/27/2026).

| Scenario | Added $/t shale (haul swap) | @5% shale: $/t cement (% of $145) | @10% | @15% | Added annual $ (5% / 10% / 15%) |
|---|---|---|---|---|---|
| Low ($2.34/mi, 32 t, +52 mi) | $7.59 | $0.55 (0.38%) | $1.09 (0.75%) | $1.64 (1.13%) | $0.19M / $0.38M / $0.58M |
| Central ($2.68/mi, 32 t, +63 mi) | $10.56 | $0.76 (0.52%) | $1.52 (1.05%) | $2.28 (1.57%) | $0.27M / $0.54M / $0.80M |
| High ($3.06/mi, 25 t, +63 mi) | $15.42 | $1.11 (0.77%) | $2.22 (1.53%) | $3.33 (2.30%) | $0.39M / $0.78M / $1.17M |

Same method for **limestone** from Weaver (~87 mi): roughly **$12.7 (low) / $14.6 (central) / $21.3 (high) per ton**, or about $16-27 per ton of clinker at ~80% of kiln feed (about $5-9M/yr at 2025 feed), i.e. roughly 10-17% of mill value per ton of cement [I]. These are order-of-magnitude estimates from generic trucking rates, not CEMEX costs. No public document reviewed says the kiln is being shut down.

## 7. Other items checked, nothing found
- Traffic studies by Stantec (8/28/2023) and Landis Evans (11/5/2024) do not name shale suppliers; the Stantec 2023 study (per an earlier reading, not re-checked) says shale trucks come from the west via US-36/SH-66 per CEMEX staff.
- DRMS M-1977-208: mentions imported shale only; the 2026 annual report has no materials list; shale-related items are the reclamation cap (section 4).
- MSHA: no CEMEX-owned shale/clay mine in CO/WY; the Lyons Quarry subunit shows ~3 staff / ~1.5k hours per quarter (reclamation or minimal activity).
- CDPHE Title V / MACT documents: no shale feed rate, no "purchased shale", no "corrective material" text; only the generic raw-material statement and P000 limits.

## 8. Gaps (information that is not in the public record reviewed)
- Current shale supplier, monthly tonnage by material, and inventory.
- Truck counts by material and source after 2023.
- Whether shale remains on the patio, and how much.
- Arcosa-to-CEMEX volumes and the reason for Arcosa's idling.
- Weaver 2025-2026 status after the "Under Review" annual report; Wyoming AQD authorizations for Weaver.
- Lyons raw-mix percentages (CDPHE application files may contain them, possibly redacted as confidential business information).
- Kiln status after September 2026: MSHA Q3 2026 hours for 0500344 are due about 10/15/2026.

## 9. Sources
- Boulder County CEMEX page: https://bouldercounty.gov/property-and-land/land-use/cemex-dowe-flats/ ; Weaver 2021-22 annual report PDF (Boulder County exhibit) ; complaint ZON-23-0003 https://www.townoflyons.com/AgendaCenter/ViewFile/Item/11211?fileID=22834
- Wyoming LQD permits GIS: https://gis.deq.wyo.gov/arcgis/rest/services/LQD_DATA/Permits/FeatureServer (layers 2 and 5, queried 9/30/2026)
- MSHA Mines.txt / MinesProdYearly / MinesProdQuarterly (downloaded 9/25-9/30/2026)
- CDPHE Title V 95OPBO082 permit / TRD / INFO_TO_SUPP / public-comment response (in `05_Air_Quality_Permit_95OPBO082/`); kiln APEN received 4/27/2026
- DRMS M-1977-208 documents (in `03_State_Mining_Permit_M1977208/`)
- Mountain Cement: https://www.mountaincement.com/our-company/ ; City of Laramie 7/19/2016 packet ; Wyoming EQC Final Order 07-4804
- Diesel (EIA PADD 4, republished); ATRI 2026 update; USGS Mineral Commodity Summaries (cement)
