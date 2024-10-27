import React from 'react'
import { Main, Section, Container, Grid, ColSpan } from '@/components/layouts'
import GrayBox from '@/components/gray-box'

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
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <GrayBox />
              </ColSpan>
            </Grid>
            <Grid columns={4}>
              <ColSpan col={4} sm={2} md={2}>
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={2}>
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <GrayBox />
              </ColSpan>
              <ColSpan col={4} sm={2} md={1}>
                <GrayBox />
              </ColSpan>
            </Grid>
          </Container>
        </Section>
        <Section className="pt-0" rowSpacing="md">
          <Container>
            <Grid>
              <ColSpan>
                <div className="text-2xl font-bold">
                  <h1>Fullwidth container</h1>
                </div>
              </ColSpan>
            </Grid>
          </Container>
          <Container fullWidth>
            <Grid>
              <ColSpan>
                <GrayBox />
              </ColSpan>
            </Grid>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}
