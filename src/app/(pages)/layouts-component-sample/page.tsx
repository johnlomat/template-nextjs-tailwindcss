import React from 'react'
import { Main, Section, Container, Grid, ColSpan } from '@/components/layouts'

export default function LayoutsCompoenentSample() {
  return (
    <React.Fragment>
      <Main>
        <Section>
          <Container>
            <Grid>
              <ColSpan>
                <div className="text-2xl font-bold">
                  <h1>Layouts Component Sample</h1>
                </div>
              </ColSpan>
            </Grid>
          </Container>
        </Section>
        <Section className="pt-0">
          <Container>
            <Grid columns={4}>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
            </Grid>
            <Grid columns={4}>
              <ColSpan col={4} sm={2} md={2}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={2}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <div className="w-full bg-slate-400 p-12"></div>
              </ColSpan>
            </Grid>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}
