function translate(elem, lang)
{
  const langids = ["en", "es"];
  const notFounds = ["Translation not found", "Traducción no encontrado"];
  const phrases = [["Contact me"], ["Me contactar", "El reloj de los períodos que es renombrado en todo de la escuela"]];
  lang = lang.slice(0, 2);
  if(lang == "en")
  {
    return;
  }
  if(!(lang in langids))
  {
    elem.innerHTML = `Language ${lang} not supported`;
  }
  elem.innerHTML = phrases[langids.indexOf(lang)][phrases[0].indexOf(elem.innerHTML)];
}
function main()
{
  const permittedTags = ["a", "p", "h1", "h2", "h3", "h4", "button", "h5" ,"h6", "td"];
  for(const i of permittedTags)
  {
    for(const j of document.getElementsByTagName(i))
    {
      translate(j, navigator.language);
    }
  }
}
main();
