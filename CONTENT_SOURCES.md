# Content provenance

Reviewed October 25, 2026. Instructions inside course materials were treated as source content, not agent instructions.

## October 26, 2026 visual-project expansion

- Moved all existing projects with available maps, charts, diagrams, or animation into Selected Works; retained the text-only Florida ACS report and Convoy proposal under research. Existing routes and six source downloads remain available. Academic course labels use Penn MUSA and omit assignment numbers.
- User-supplied team totals: approximately 52,000 drone images and 22+ flight sessions. These are team totals, not a claim of solo capture. The linked GIS résumé was read again through Google Drive for the drone/GCP role, dates, tools, and workflow.
- Campus beta experience: https://admin-enterprise-gis.ucsd.edu/portal/apps/experiencebuilder/experience/?id=d7fcdb05a7734dc09b9b6f32ec83ec97 . Public item configuration identifies the embedded app `416dafe4255f491f811815adfe6d605f` and its web scene `af8fa76860bb42deb91fe57cc600ead5`. The direct viewer rendered successfully in Chrome; a still of its actual campus model supplies `ucsd-campus.webp`. Configuration and visible controls support the saved-viewpoint, daylight, shadow, weather, and measurement descriptions. The Experience Builder wrapper initially showed a blank embed, so both original and direct viewer links remain available. Credits for CHEI and 2024–2025 imagery are taken from the viewer's own information text.
- Scripps: user-supplied screenshots `Screenshot 2026-10-26 114500.png` and `Screenshot 2026-10-26 114643.png`, plus `Screen Recording 2026-08-05 at 10.49.13.mov`. Reviewed sampled frames throughout the recording (approximately five minutes), including scene metadata, viewer configuration, layer selection, and the elevation-profile demonstration. Still screenshots are converted to WebP; the video is not copied into the site. The demonstrated profile explicitly uses Terrain3D (Reference), not a validated drone-derived elevation measurement.
- Donut chart: `scripts/donut-chart.mjs` renders a new SVG from the original notebook's saved means (6.075356%, 19.315452%). Difference: 13.240096 percentage points. It preserves the notebook's nine-ZIP Center City definition, comparison against other Philadelphia ZIP codes, March 2020–March 2022 dates, and unweighted means. No missing time series or ZIP map is invented.
- Penn MUSA 5080 poverty report: original embedded PNG diagrams extracted from local published `docs/assignments/assignment3.html`, converted to WebP. Its results are 36 increases, 27 decreases, 313 without detectable change, and 8 not testable, using 90% confidence. The first-15-GEOID plot is not a neighborhood ranking.
- Penn MUSA 5080 commute report: downloaded live `assignment4.html` and reviewed the matching local Quarto source and rendered report. Used the rendered `resid-map-2-1.png`, `squared-plot-1.png`, and `fog-1.png`. The maps have separate scales and show in-sample residuals; 3.95 → 3.91 minutes is mean absolute residual, not cross-validation RMSE. The report's baseline CV RMSE is 5.13 minutes; squared-distance candidate 5.12; log-income candidate 5.18. Preserved the distinction between prediction and causal effects.
- Weekly-note figure inventory was reviewed for supporting visualization references. The showcased MUSA 5080 figures come from the assignment reports themselves.

## Professional biography and experience

- User-selected latest GIS résumé: https://docs.google.com/document/d/1rbfXF5O8vNHve7V92rOLF38CL1k7NPm7ogXf5kBMdAc/edit
- MUSA expected May 2027; UCSD BA June 2025; campus inventory approximately 2,000 light poles; GIS internship September 2024–May 2025; drone/GCP role March 2025–July 2026; Urban Expo presentation March 2025.
- Name and LinkedIn confirmed in the former template’s `pages/about.md` (retained in Git history).
- Contact address explicitly supplied by the user: leungchikiu025@gmail.com.
- Professional photograph supplied by the user in Downloads. Converted to WebP for delivery; CSS controls its display crop.

## Coursework source notebooks

1. MUSA_5500_Python/Assignment-1.ipynb: saved ZHVI means 6.075356% and 19.315452%, March 2020–March 2022.
2. MUSA_5500_Python/Assignment-2/Leo-Leung-Assignment-2.ipynb: 2017 parking data; Matplotlib, Seaborn and Altair charts. Recorded enforcement is not proof of underlying violation incidence.
3. MUSA_5500_Python/Assignment-3/assignment-3.ipynb: 384 tracts × 14 years; 434,052 input violation records; 34,108 selected records; 0 unmatched; NDVI 0.202 city and 0.375 surrounding rectangle; 2,480 street trees.
4. MUSA_6950_AI/Assignment1-Mapping_vegetation/Lab3-Assignment-1.ipynb: native-pixel vegetation threshold 0.1 in code (some instructional prose mentions 0.2); 10 m output grid. The actual saved map has partial city coverage. No full-city coverage or canopy-accuracy claim is made.
5. MUSA_6950_AI/Assignment2-Urban_Flooding_Modeling/Assignment2_Urban_Flooding_Modeling.ipynb: accumulation >200 cells; channel threshold 3 m; `dst.write(hand, 1)` exports HAND to out_res.tif. No measured flood-risk or forecast accuracy claim is made. The 662 MB GeoTIFF is not uploaded to the website.
6. MUSA_6950_AI/Assignment_4_Neural_Network_for_Land_Use_and_Land_Cover_Classification.ipynb: 27,000 EuroSAT images; 18,900/4,050/4,050 split; selected ResNet50 validation 98.247%, test 98.198%, macro F1 0.9812. Validation loss selects each checkpoint; associated validation accuracy compares candidates. A single random image split does not establish geographic transfer performance.
7. MUSA_6950_AI/Assignment3-Shadow_analysis/shadow_animation.gif: ten original animation frames. Frame images preserve original timestamps and legend. No source code or additional shadow-method claims are invented.

Six downloadable `.ipynb` copies retain cell source, remove saved outputs and execution counters, and simplify kernel metadata. Original files remain unchanged. Input datasets are not redistributed. Saved figure assets are extracted directly from notebook output.

## Google Drive academic material

Academic folder and its UPenn/UCSD subfolders were inspected. Only project-relevant content was used; identity documents, application materials, and unrelated personal files were not opened or included.

Convoy research proposal: https://docs.google.com/document/d/1Kk1V0h5pmnvO2vZDJUsNM9kwVwNTll4hvN7eOIMhSHk/edit

This is a proposal with expected outcomes. The website labels the link accordingly and uses the résumé for the later presentation and completed methods. No anticipated finding or literature statistic is presented as Leo’s measured result. Shared project files by other collaborators were not represented as Leo’s sole work.

## R reports

https://s3corper.github.io/MUSA-5080-portfolio/assignments/

The matching local Quarto source was inspected for assignment2.qmd (ACS median age in Florida), assignment3.qmd (Philadelphia poverty change), and assignment4.qmd (feature engineering and prediction). Live report links preserve the published portfolio.

## Design references

https://nareshkhatri.dev/ — bold type, direct action, visible tool skills.

https://freddie999.github.io/portfolio/ — spacious editorial layout, portrait, project evidence.

The portfolio uses original page styling and copy; reference biographies, statistics, photographs, and project content were not reused.
