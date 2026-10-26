// Recorded group means from the supplied Penn MUSA 5500 notebook.
// Each ZIP code has equal weight; this does not represent housing-stock weights.
export const donutMeans = {center:6.075356,other:19.315452};
export function donutChart(){
 const {center,other}=donutMeans;
 const x=v=>310+v/25*560;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" role="img" aria-labelledby="title desc">
 <title id="title">The Philadelphia donut effect</title><desc id="desc">Average ZIP-code home-value appreciation, March 2020 to March 2022. Center City: ${center.toFixed(2)} percent. Other Philadelphia ZIP codes: ${other.toFixed(2)} percent. Difference: ${(other-center).toFixed(2)} percentage points.</desc>
 <rect width="1000" height="600" rx="18" fill="#f4f7fc"/>
 <g font-family="Arial, sans-serif" fill="#182334"><text x="55" y="65" font-size="16" letter-spacing="2" fill="#52627a">PHILADELPHIA / ZILLOW HOME VALUE INDEX</text><text x="55" y="118" font-size="35" font-weight="bold">Growth beyond the center</text><text x="55" y="154" font-size="20" fill="#52627a">March 2020 – March 2022 · Average appreciation by ZIP code</text>
 ${[0,5,10,15,20,25].map(v=>`<line x1="${x(v)}" y1="210" x2="${x(v)}" y2="398" stroke="#d7dfe9"/><text x="${x(v)}" y="432" font-size="17" text-anchor="middle" fill="#52627a">${v}%</text>`).join('')}
 <text x="55" y="257" font-size="22">Center City</text><rect x="310" y="222" width="${x(center)-310}" height="54" rx="5" fill="#244edb"/><text x="${x(center)+15}" y="257" font-size="25" font-weight="bold">${center.toFixed(2)}%</text>
 <text x="55" y="342" font-size="22">Other Philadelphia</text><text x="55" y="370" font-size="19" fill="#52627a">ZIP codes</text><rect x="310" y="315" width="${x(other)-310}" height="54" rx="5" fill="#267663"/><text x="${x(other)+15}" y="350" font-size="25" font-weight="bold">${other.toFixed(2)}%</text>
 <line x1="55" y1="468" x2="945" y2="468" stroke="#d7dfe9"/><text x="55" y="513" font-size="29" font-weight="bold" fill="#244edb">+${(other-center).toFixed(2)} percentage points</text><text x="55" y="551" font-size="17" fill="#52627a">Difference between group means · Unweighted ZIP-code averages</text><text x="55" y="578" font-size="15" fill="#52627a">Source: saved Penn MUSA 5500 notebook results. Descriptive comparison, not a causal estimate.</text></g></svg>`;
}
