// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { i18nString as initI18nString, initI18nObjectLoaderAsync } from 'typesafe-i18n'
import type { Translation, TranslationFunctions, Formatters, Locales } from './types.actual'
import type { LocaleDetector } from 'typesafe-i18n/detectors'
import { detectLocale as detectLocaleFn } from 'typesafe-i18n/detectors'
import { initFormatters } from './formatters-template.actual'

export const baseLocale: Locales = 'en'

export const locales: Locales[] = [
	'it-it',
	'en-us',
	'fr-be'
]

const i18nObjectLoaderAsync = initI18nObjectLoaderAsync()

const localeTranslationLoaders = {
	'it-it': () => import('./it-it'),
	'en-us': () => import('./en-us'),
	'fr-be': () => import('./fr-be'),
}

export const getTranslationForLocale = async (locale: Locales) => (await (localeTranslationLoaders[locale] || localeTranslationLoaders[baseLocale])()).default as Translation

export const i18nObject = (locale: Locales) => i18nObjectLoaderAsync<Locales, Translation, TranslationFunctions, Formatters>(locale, getTranslationForLocale, initFormatters)

export const i18nString = async (locale: Locales) => initI18nString<Locales, Formatters>(locale, await initFormatters(locale))

export const detectLocale = (...detectors: LocaleDetector[]) => detectLocaleFn<Locales>(baseLocale, locales, ...detectors)
