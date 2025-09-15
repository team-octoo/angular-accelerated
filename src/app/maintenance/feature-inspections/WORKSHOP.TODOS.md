# TODO - Rendering Optimalisatie

- [ ] Zorg dat de `inspection-graph` niet onnodige change-detections triggert (hoeft niet in de zone te zitten).
- [ ] Implementeer `ChangeDetectionStrategy.OnPush` en refactor waar nodig om onnodige checks te voorkomen.
- [ ] Vervang methods door `pipes` waar mogelijk (`utils/pipes/..`).
- [ ] Voeg tracking toe aan de lijst, gebruik de nieuwe syntax (`@for()`).
- [ ] Verplaats de zware berekingen voor de algemene score naar een web-worker.
- [ ] Voeg een `button` toe die de gebruiker in staat stelt om de graph on demand in te laden. Gebruik hiervoor `@defer` met zijn parameters. Toon een placeholder en loading state.


# TODO - Router
- [ ] Bind de `id` van een inspection via de router aan de input van het `inspection-detail` component en haal deze op via de `InspectionService` (`getInspectionById`).
- [ ] Haal de `inspection` voor de inspection-detail component op via een `resolver`.
- [ ] Gebruik een context service voor het delen naar de child components.
- [ ] Gebruik de `routerOutletData` voor het togglen van debug info in de verschillende tabs.