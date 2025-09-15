# TODO - Signals

## repairs-search
- [ ] Voeg een model property toe voor de zoekwaarde.
- [ ] Bind deze aan de input.

## repairs-list
- [ ] Geef een lijst door van repairs via signal input.
- [ ] Render de lijst via @for. Toon de naam, description, status en prijs standaard.

## repairs-component
- [ ] Converteer get call naar een signal via RxJS interop, initiele waarde is een lege array.
- [ ] Voorzie een search signal voor de binding met repairs-search.
- [ ] Voorzie een gefilterde lijst signal op basis van de search signal.
- [ ] Voorzie functionaliteit om de search value persistent te maken. Lees eenmalig uit localStorage voor de initiële waarde, schrijf terug in localstorge bij aanpassingen (via een effect).
- [ ] Toon de eerste `in-progress` repair op basis van de gefilterde lijst. Gebruik hiervoor een `linkedSignal` die ook extra context meegeeft als door de search deze eerste `in-progress` waarde is gewijzigd t.o.v. het vorige resultaat.