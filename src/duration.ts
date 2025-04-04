export function formatDuration(sekunden: number): string {
  if (sekunden < 0) {
    throw new Error("Duration cannot be negative");
  }
 
  let stunden = Math.floor(sekunden / 3600);
  sekunden %= 3600;
  let minuten = Math.floor(sekunden / 60);
  sekunden = Math.round(sekunden % 60);
 
  if (sekunden === 60) 
  {
    sekunden = 0;
    minuten += 1;
  }
 
  if (minuten === 60) {
    minuten = 0;
    stunden += 1;}
 
  let result = "";
  if (stunden > 0) {
    result += `${stunden}h`;
  }
  if (minuten > 0 || stunden > 0) {
    result += `${minuten}m`;
  }
  result += `${sekunden}s`;
 
  return result;
}