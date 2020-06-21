import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { GlossaryCard } from './GlossaryCard'
import { fetchAllGlossaries } from '../store/glossary'


export function Glossary() {
  const glossary = useSelector(store => {
    // console.log("Redux Store", store)
    return store.glossary ? store.glossary : []
  })

  const dispatch = useDispatch()

  const sideEffects = () => {
    dispatch(fetchAllGlossaries())
  }
  React.useEffect(sideEffects, [])
  console.log(glossary)
  return(
    <>
      <div id="glossary">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>GLOSSARY</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {glossary.map(glossaries => <GlossaryCard glossaries = {glossaries} key = {glossaries.glossaryId} />)}
        </div>
        </div>






{/*export function Glossary() {*/}
{/*    return(*/}
{/*      <>*/}
{/*        // <div id="glossary">*/}
{/*        // <div className="container text-center">*/}
{/*        //     <div className="row">*/}
{/*        //       <div className="col">*/}
{/*        //         <h1>GLOSSARY</h1>*/}
{/*        //         </div>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        // <div className="container text-center">*/}
{/*        //   <div className="row">*/}
{/*        //     <div className="col">*/}
{/*        //   <h5>Definitions from space</h5>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        // </div>*/}
{/*        // <div className="p-2"></div>*/}
{/*        // <div className="container-fluid px-lg-5" id="about">*/}
{/*        //   <div className="row mx-md-5 mx-3 py-5 align-items-center">*/}
{/*        //     <div className="col-md-3 py-3 px-md-4 px-5 text-center">*/}
{/*        //       <p>Placeholder term</p>*/}
{/*        //     </div>*/}
{/*        //     <div className="col">*/}
{/*        //       <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching*/}
{/*        //         attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but*/}
{/*        //         steal mom's crouton while she is in the bathroom chase the pig around the house. test </p>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        //   <div className="row mx-md-5 mx-3 py-5 align-items-center">*/}
{/*        //     <div className="col-md-3 py-3 px-md-4 px-5 text-center">*/}
{/*        //       <p>Placeholder term</p>*/}
{/*        //     </div>*/}
{/*        //     <div className="col">*/}
{/*        //       <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching*/}
{/*        //         attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but*/}
{/*        //         steal mom's crouton while she is in the bathroom chase the pig around the house. </p>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        //   <div className="row mx-md-5 mx-3 py-5 align-items-center">*/}
{/*        //     <div className="col-md-3 py-3 px-md-4 px-5 text-center">*/}
{/*        //       <p>Placeholder term</p>*/}
{/*        //     </div>*/}
{/*        //     <div className="col">*/}
{/*        //       <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching*/}
{/*        //         attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but*/}
{/*        //         steal mom's crouton while she is in the bathroom chase the pig around the house. </p>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        //   <div className="row mx-md-5 mx-3 py-5 align-items-center">*/}
{/*        //     <div className="col-md-3 py-3 px-md-4 px-5 text-center">*/}
{/*        //       <p>Placeholder term</p>*/}
{/*        //     </div>*/}
{/*        //     <div className="col">*/}
{/*        //       <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching*/}
{/*        //         attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but*/}
{/*        //         steal mom's crouton while she is in the bathroom chase the pig around the house. </p>*/}
{/*        //     </div>*/}
{/*        //   </div>*/}
{/*        // </div>*/}
{/*        // </div>*/}
      </>
    )
  }