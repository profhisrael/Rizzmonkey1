import React, { useState } from 'react';

function QuestionArea() {
  const [expandedItems, setExpandedItems] = useState({});

  const handleAccordionClick = (itemId) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <section className="question_area section_padding" id="faq">
      <div className="container">
        <div className="section_title">
          <h2>Any questions?</h2>
        </div>
        <div className="question_acordion">
          <ul id="accordion-container">
            <li className={`accordion-item ${expandedItems['accordion-label-1'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-1'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-1')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-1'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-1"
                  id="accordion-label-1"
                  aria-expanded={expandedItems['accordion-label-1']}>
                  Who is the Rizzmonkey?
                </button>
              </div>
              <div
                id="accordion-panel-1"
                className={`panel-content ${expandedItems['accordion-label-1'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-1"
                hidden={!expandedItems['accordion-label-1']}>
                <p>
                  The Rizzmonkey is the most famous, most rizz obtaining monkey it the entire
                  universe. Don’t get to close to him otherwise he will steal your rizz… and your
                  girl!.
                </p>
              </div>
            </li>
            <li className={`accordion-item ${expandedItems['accordion-label-2'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-2'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-2')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-2'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-2"
                  id="accordion-label-2"
                  aria-expanded={expandedItems['accordion-label-2']}>
                  Why $RZZMNKY?
                </button>
              </div>
              <div
                id="accordion-panel-2"
                className={`panel-content ${expandedItems['accordion-label-2'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-2"
                hidden={!expandedItems['accordion-label-2']}>
                <p>
                  Not holding the token is the one thing that keeps you from seducing any girl you
                  like. Don’t wait and grab your tokens now! Jokes aside the token has big potential
                  and a growing community supporting the project.
                </p>
              </div>
            </li>
            <li className={`accordion-item ${expandedItems['accordion-label-3'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-3'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-3')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-3'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-3"
                  id="accordion-label-3"
                  aria-expanded={expandedItems['accordion-label-3']}>
                  When will I get my $RZZMNKY tokens?
                </button>
              </div>
              <div
                id="accordion-panel-3"
                className={`panel-content ${expandedItems['accordion-label-3'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-3"
                hidden={!expandedItems['accordion-label-3']}>
                <p>
                  As soon as the last presale phase ends you will be able to claim your tokens
                  within a 10 weeks period. Every other week you will be able to claim 10% of your
                  purchased tokens.
                </p>
              </div>
            </li>
            <li className={`accordion-item ${expandedItems['accordion-label-4'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-4'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-4')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-4'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-4"
                  id="accordion-label-4"
                  aria-expanded={expandedItems['accordion-label-4']}>
                  Where and when can I start trading $RZZMNKY?
                </button>
              </div>
              <div
                id="accordion-panel-4"
                className={`panel-content ${expandedItems['accordion-label-4'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-4"
                hidden={!expandedItems['accordion-label-4']}>
                <p>
                  The $RZZMNKY token will launch on Pancakeswap first. Central exchange listings
                  will follow soon after. The launch on Pancakeswap will be a few days after the
                  presale phase ends. You can find further informations on our social medias.
                </p>
              </div>
            </li>

            {/* Add more questions below */}
            <li className={`accordion-item ${expandedItems['accordion-label-5'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-5'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-5')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-5'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-5"
                  id="accordion-label-5"
                  aria-expanded={expandedItems['accordion-label-5']}>
                  What is the potential of $RZZMNKY?
                </button>
              </div>
              <div
                id="accordion-panel-5"
                className={`panel-content ${expandedItems['accordion-label-5'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-5"
                hidden={!expandedItems['accordion-label-5']}>
                <p>
                  Thanks to the vesting, hard cap presale and very low market cap at launch, there
                  is a big potential for massive gains. With a growing community the token will be
                  able to sky rocket.
                </p>
              </div>
            </li>

            {/* Add more questions below */}
            <li className={`accordion-item ${expandedItems['accordion-label-6'] ? 'opened' : ''}`}>
              <div
                className={`accordion-head ${expandedItems['accordion-label-6'] ? 'active' : ''}`}
                onClick={() => handleAccordionClick('accordion-label-6')}>
                <div className="accordion-icon">
                  <span></span>
                  <span className={expandedItems['accordion-label-6'] ? 'open-icon' : ''}></span>
                </div>
                <button
                  className="accordion-title"
                  aria-controls="accordion-panel-6"
                  id="accordion-label-6"
                  aria-expanded={expandedItems['accordion-label-6']}>
                  What about charity?
                </button>
              </div>
              <div
                id="accordion-panel-6"
                className={`panel-content ${expandedItems['accordion-label-6'] ? 'opened' : ''}`}
                aria-labelledby="accordion-label-6"
                hidden={!expandedItems['accordion-label-6']}>
                <p>
                  We support animal rights organizations! Thus 0.069% of the team tokens will go
                  straight towards charity supporting monkeys.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default QuestionArea;
