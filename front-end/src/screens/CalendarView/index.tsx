// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'react-big-calendar/lib/css/react-big-calendar.css';

import styled from '@xstyled/styled-components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Grid, Popup } from 'semantic-ui-react';
import { useGetCalenderEventsQuery } from 'src/generated/graphql';
import getNetwork from 'src/util/getNetwork';

import CustomToolbar from './CustomToolbar';
import CustomWeekHeader, { TimeGutterHeader } from './CustomWeekHeader';
// import CustomWeekView from './CustomWeekView';

interface Props {
  className?: string
	small?: boolean
	emitCalendarEvents?: React.Dispatch<React.SetStateAction<any[]>> | undefined
}

const localizer = momentLocalizer(moment);

const NETWORK = getNetwork();

const CalendarView = ({ className, small = false, emitCalendarEvents = undefined }: Props) => {

	const { data, refetch } = useGetCalenderEventsQuery({ variables: {
		network: NETWORK
	} });

	const [calendarEvents, setCalendarEvents] = useState<any[]>([]);
	const [selectedView, setSelectedView] = useState<string>('month');

	useEffect(() => {
		refetch();
	}, [refetch]);

	useEffect(() =>  {
		const eventsArr:any[] = [];
		data?.calender_events.forEach(eventObj => {
			eventsArr.push({
				end_time: moment(eventObj.end_time).toDate(),
				id: eventObj.id,
				start_time: moment(eventObj.start_time).toDate(),
				title: eventObj.title
			});
		});
		setCalendarEvents(eventsArr);

		if(emitCalendarEvents) {
			emitCalendarEvents(eventsArr);
		}
	}, [data, emitCalendarEvents]);

	function Event({ event } : {event: any}) {
		return (
			<Popup
				size='huge'
				basic
				content={event.title}
				on='click'
				hideOnScroll
				trigger={
					<span>
						{ selectedView == 'month' && <span className='event-time'> {moment(event.start_time).format('LT').toLowerCase()}</span> }
						{event.title}
					</span>
				}
			/>
		);
	}

	return (
		<div className={className}>
			{ !small && <h1>Calendar</h1>}
			<Grid stackable>
				{data && data.calender_events ?
					<Grid.Row>
						<Calendar
							className='events-calendar'
							localizer={localizer}
							events={calendarEvents}
							startAccessor='start_time'
							endAccessor='end_time'
							popup={true}
							components={{
								event: Event,
								timeGutterHeader: TimeGutterHeader,
								toolbar: props => <CustomToolbar {...props} small={small} />,
								week: {
									header: CustomWeekHeader
								}
							}}
							formats={{
								timeGutterFormat: 'h A'
							}}
							onView={setSelectedView}
							views={{
								agenda: true,
								day: true,
								month: true,
								week: true
							}}
						/>
					</Grid.Row>
					:
					null
				}
			</Grid>
		</div>
	);
};

export default styled(CalendarView)`

h1 {
	@media only screen and (max-width: 576px) {
		margin: 3rem 1rem 1rem 1rem;
	}

	@media only screen and (max-width: 768px) and (min-width: 576px) {
		margin-left: 1rem;
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		margin-left: 1rem;
	}
}

.events-calendar {
	height: 750px;
	width: 99%;
	max-width: 1920px;
	
	@media only screen and (max-width: 768px) {
		width: 100%;
		max-width: 100%;
		padding: 1em 0 1em 0;
	}

	.rbc-toolbar {
		@media only screen and (max-width: 576px) {
			flex-direction: column;

			span {
				margin-bottom: 1em;
			}
		}
	}

	.custom-calendar-toolbar,
	.rbc-month-view,
	.rbc-time-view,
	.rbc-agenda-view  {
		background: #fff;
		border: none;
	}

	.custom-calendar-toolbar {
		height: 77px;
		padding: 6px 26px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 1px solid #E8E8E8;
		display: flex;
		align-items: center;

		.select-div {
			&:nth-of-type(2) {
				padding-left: 19px;
			}

			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 65px;
			border-right: 1px solid #E8E8E8;
			padding-right: 19px;

			label {
				font-size: 14px;
				margin-bottom: 8px;
			}

			.dropdown {
				color: #E5007A;
			}
		}

		.date-text {
			margin-left: 24px;
			margin-right: 16px;
			font-size: 20px;
			color: #787878;
		}

		.button {
			background: none;
			padding: 8px;
			font-size: 14px;

			&:hover {
				background: #eee;
			}
		}

		span {
			word-wrap: none;
			white-space: nowrap;
		}

		.month-select-small, .view-select-small {
			padding-left: 5px !important;

			.icon {
				padding-right: 5px !important;
			}
		}

		.month-select-small {
			width: 52px !important;
			min-width: 52px !important;
		}
		
		.view-select-small {
			width: 72px !important;
			min-width: 72px !important;
		}

		.search-btn {
			margin-left: auto;
			margin-right: 22px;
			font-size: 20px;
		}

		.today-btn {
			margin-left: auto;
			margin-right: 22px;
			border-radius: 5px;
			font-size: 16px;
			padding: 10px 20px !important;

			@media only screen and (max-width: 576px) {
				margin-right: 8px;
			}
		}
		
		.create-event-btn {
			border-radius: 5px;
			border: solid 1px #E5007A;
			color: #E5007A !important;
			font-size: 16px;
			padding: 10px 20px !important;
			margin-right: 0 !important;
		}

	}

	.rbc-month-header {
		height: 44px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #eee;

		.rbc-header {
			font-size: 16px;
			font-weight: 400 !important;
			border: none !important;
			text-align: left;
			margin-left: 2px;
		}
	}

	.rbc-time-header-cell {
		min-height: inherit;

		.rbc-header {
			border-bottom: none;
			border-left: none;
			padding-top: 6px;
			padding-bottom: 13px;

			.week-header-text {
				height: min-content;
				color: #787878;
				font-family: 'Roboto' !important;
	
				.day-of-week {
					text-transform: uppercase;
					font-size: 10px;
					margin-bottom: 8px;
					font-weight: 500;
				}
	
				.day-num {
					font-size: 22px;
				}
			}
		}
	}


	.rbc-date-cell {
		button {
			font-size: 15px;
			padding: 5px;
			font-weight: 600 !important;
		}

		&.rbc-current, &.rbc-now {
			button {
				background-color: #E6007A;
				color: #fff;
				border: 1px solid #E6007A;
				border-radius: 50%;
			}
		}
	}

	.rbc-time-header-content {
		border-left: none;
	}

	.rbc-off-range-bg {
		background: #fff !important;
	}

	.rbc-off-range {
		color: #CFCFCF;
	}

	.rbc-date-cell {
		text-align: left;
		padding: 5px 8px;
	}

	.rbc-time-header-gutter {
		display: flex;
		align-items: end;
		justify-content: center;
		font-weight: 400;
		font-size: 12px;
		color: #777777;
		padding-bottom: 4px;
	}

	.rbc-timeslot-group {
		padding-left: 10px;
		padding-right: 10px;
		font-size: 12px;
		color: #777777;
	}

	.rbc-month-row {
		.rbc-day-bg.rbc-today {
			border: 1px solid #E6007A;
			background-color: #fff;
		}
	}

	.rbc-today {
		background-color: rgba(229, 0, 122, 0.02);

		.week-header-text {
			color: #E5007A !important;
		}
	}

	.rbc-events-container {
		.rbc-event {
			border: 1px solid #E6007A;
			border-left: 4px solid #E6007A;
		}
	}

	.rbc-event {
		background-color: #fff;
		border-radius: 0;
		color: #000;
		font-weight: 500;
		font-size: 12px;
		border-left: 4px solid #E6007A;

		.event-time {
			margin-right: 5px;
			font-weight: 400;
			color: #747474;
		}

		&:focus {
			outline: none;
		}
	}

	.rbc-current-time-indicator {
		background-color: #E6007A;
	}
}

`;
