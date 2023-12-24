import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton, EmailShareButton, EmailIcon } from 'react-share';
import { TwitterIcon, FacebookIcon, WhatsappIcon } from 'react-share';

const SectionCard = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {children}
    </div>
);

function ViewRecipe() {
    let { recipeId } = useParams();
    const data = useLoaderData();
    const recipeLink = `${window.location.href}`;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-yellow-500">{`Recipe ${data.recipeId}`}</h1>
            {data.body.map((section) => (
                <SectionCard key={section.id} title={section.name}>
                    {/* Render content based on section type */}
                    {section.id === 'basicInfo' && (
                        <div>
                            <p>{`Recipe Name: ${section.data.receipeName}`}</p>
                            <p>{`Time: ${section.data.time.hour} hours ${section.data.time.min} minutes`}</p>
                            <p>{`Level: ${section.data.level}`}</p>
                            <p>{`Meal Type: ${section.data.mealType}`}</p>
                        </div>
                    )}

                    {section.id === 'recipeIng' && (
                        <ul>
                            {section.data.map((ingredient) => (
                                <li key={ingredient.id}>{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</li>
                            ))}
                        </ul>
                    )}

                    {section.id === 'stepsToPrepare' && (
                        <ol>
                            {section.data.map((step) => (
                                <li key={step.id}>{`Step ${step.stepNumber}: ${step.description}`}</li>
                            ))}
                        </ol>
                    )}

                    {section.id === 'imageUpload' && (
                        <div>
                            {/* You can add image rendering logic here */}
                            <p>Image Upload Section</p>
                        </div>
                    )}

                    {section.id === 'addInfo' && (
                        <div>
                            <p>{`Tags: ${section.data.tags}`}</p>
                            <p>{`Additional Info: ${section.data.additionalInfo}`}</p>
                        </div>
                    )}
                </SectionCard>
            ))}
            <div className="flex justify-between items-start mb-4">
                <div className='bg-white rounded-lg p-4 w-1/4 flex justify-evenly'>
                    <TwitterShareButton url={recipeLink} title={`Check out this recipe: ${recipeLink}`}>
                        <TwitterIcon size={32} round={false} />
                    </TwitterShareButton>
                    <FacebookShareButton url={recipeLink} hashtag={`Check out this recipe: ${recipeLink}`}>
                        <FacebookIcon size={32} round={false} />
                    </FacebookShareButton>
                    <WhatsappShareButton url={recipeLink} title={`Check out this recipe: ${recipeLink}`}>
                        <WhatsappIcon size={32} round={false} />
                    </WhatsappShareButton>
                    <EmailShareButton url={recipeLink} title={`Check out this recipe: ${recipeLink}`}>
                        <EmailIcon size={32} round={false} />
                    </EmailShareButton>
                </div>
                <div className='bg-white rounded-lg p-4 w-1/3 flex justify-evenly'>
                    <h2><span className='font-bold'>Created at:</span> {new Date(data.createdDateTime).toLocaleDateString() +" | "+ new Date(data.createdDateTime).toLocaleTimeString() }</h2>
                </div>
            </div>
        </div>
    );
}

export default ViewRecipe