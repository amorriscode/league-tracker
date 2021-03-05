import { useState } from 'react'

import Section from './Section'

import SideEffectsBox from './SideEffectsBox'
import SideEffectsContent from './SideEffectsContent'

import VaccinesAdministeredBox from './VaccinesAdministeredBox'
import VaccinesAdministeredContent from './VaccinesAdministeredContent'

import VaccineHowBox from './VaccineHowBox'
import VaccineHowContent from './VaccineHowContent'

import MyVaccineStoryBox from './MyVaccineStoryBox'

const contentComponents = {
  sideEffects: SideEffectsContent,
  vaccinesAdministered: VaccinesAdministeredContent,
  vaccineHow: VaccineHowContent,
  myVaccineStory: VaccineHowContent,
}

export default function NeedToKnow() {
  const [contentType, setContentType] = useState('')
  const [showContent, setShowContent] = useState(false)

  const handleDataBoxClick = (newContentType) => {
    if (newContentType !== contentType) {
      setContentType(newContentType)
      setShowContent(true)
    } else if (newContentType === contentType && showContent) {
      setShowContent(false)
      setContentType('')
    } else {
      setShowContent(true)
    }
  }

  const Content = contentComponents[contentType]

  return (
    <Section title="What You Need to Know">
      <div className="grid grid-cols-4 gap-8">
        <SideEffectsBox
          handleOnClick={handleDataBoxClick}
          isShowingContent={contentType === 'sideEffects'}
        />

        <VaccinesAdministeredBox
          handleOnClick={handleDataBoxClick}
          isShowingContent={contentType === 'vaccinesAdministered'}
        />

        <VaccineHowBox
          handleOnClick={handleDataBoxClick}
          isShowingContent={contentType === 'vaccineHow'}
        />

        <MyVaccineStoryBox
          handleOnClick={handleDataBoxClick}
          isShowingContent={contentType === 'myVaccineStory'}
        />
      </div>

      {showContent && (
        <div className="w-full bg-brand-teal-light rounded-lg p-8">
          <Content />
        </div>
      )}
    </Section>
  )
}
