# 40k List Parser

[![Package Version][package-image]][package-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Open Issues][issues-image]][issues-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

## Usage

```
import { ListParser } from '40k-list-parser';

const list = new ListParser();
const parsedList = list.parse("My list string");
```

## Supported list formats

- GW App (v1.29.0 (2), Data Version: v579)
