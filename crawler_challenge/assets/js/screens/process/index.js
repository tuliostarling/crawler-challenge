import React, { Component, Fragment } from "react";

import PropType from "prop-types";

import { MovementCard } from "./movement_card";
import { DetailsCard } from "./details_card";
import { RelatedPartiesCard } from "./related_parties_card";
import { EmptyPage } from "./empty";

export default class ProcessScreen extends Component {
  constructor(props) {
    super(props);

    const { process } = this.props;

    console.log(process)

    this.state = {
      process: process
    };
  }

  render_card(process) {
    return (
      <Fragment>
        <div className="wrapper__card_header">
          <h4 className="wrapper__card_header___title">
            Processo n. {process.process_number} do TJAL
          </h4>
          <span className="wrapper__card_header___sub_title">
            Distribuído em 09/11/2017
          </span>
        </div>

        <div className="row">
          <div className="col s12 m8 l8 wrapper__movement_card">
            <MovementCard movements={process.movements} />
          </div>
          <div className="col s12 m4 l4">
            <DetailsCard details={process.details} />
            <RelatedPartiesCard parties={process.parties} />
          </div>
        </div>
      </Fragment>
    );
  }

  render_empty_or_card(process) {
    if (process != null) {
      return this.render_card(process);
    }

    return <EmptyPage />;
  }

  render() {
    const { process } = this.props;

    return <div className="wrapper">{this.render_empty_or_card(process)}</div>;
  }
}

ProcessScreen.propTypes = {
  process: PropType.objectOf(
    PropType.shape({
      id: PropType.number.isRequired,
      court_id: PropType.object.isRequired,
      process_number: PropType.string.isRequired,
      details: PropType.arrayOf(
        PropType.shape({
          id: PropType.number.isRequired,
          process_id: PropType.number.isRequired,
          area: PropType.string.isRequired,
          class: PropType.string.isRequired,
          control: PropType.string.isRequired,
          distribution_date: PropType.string.isRequired,
          judge: PropType.string.isRequired,
          other_subject: PropType.string,
          process_number: PropType.string.isRequired,
          stock_price: PropType.string.isRequired,
          subject: PropType.string.isRequired
        })
      ).isRequired,
      movements: PropType.arrayOf(
        PropType.shape({
          id: PropType.number.isRequired,
          process_id: PropType.number.isRequired,
          movement: PropType.string.isRequired,
          movement_date: PropType.string.isRequired
        })
      ).isRequired,
      parties: PropType.arrayOf(
        PropType.shape({
          id: PropType.number.isRequired,
          process_id: PropType.number.isRequired,
          name: PropType.string.isRequired,
          partie: PropType.string.isRequired,
          person_name_position: PropType.string.isRequired,
          position: PropType.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};
