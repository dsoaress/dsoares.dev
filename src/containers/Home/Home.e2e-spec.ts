import { i18n } from '@/data/i18n'
import type { Locales } from '@/types'

import locales from '../../../locales'

describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Language selector', () => {
    it('should display the language selector', () => {
      cy.findByTestId('language-selector').should('exist')
    })

    it('should display the language selector with the correct languages', () => {
      locales.locales.forEach(locale => {
        cy.findByText(`[${locale}]`).should('exist').click({ force: true })
        cy.findByText(i18n[locale as Locales].description).should('exist')

        if (locale !== locales.defaultLocale) cy.url().should('include', locale)
        else cy.url().should('not.include', locale)
      })

      // Reset the language to the default locale
      cy.findByText(`[${locales.defaultLocale}]`).click({ force: true })
    })
  })

  describe('Theme toggle', () => {
    const themeToggle = 'theme-toggle'

    it('should have a theme toggle', () => {
      cy.findByTestId(themeToggle).should('exist')
    })

    it('should have to load in dark mode', () => {
      cy.get('.dark').should('exist')
    })

    it('should be able to toggle the theme and toggle theme back', () => {
      cy.findByTestId(themeToggle).click()
      cy.get('.light').should('exist')

      cy.findByTestId(themeToggle).click()
      cy.get('.dark').should('exist')
    })
  })
})
