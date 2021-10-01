import { createSlice } from '@reduxjs/toolkit'

export const programsSlice = createSlice({
    name: 'programs',
    initialState: {
        programs: [
            {
                "Pid": 3,
                "Pname": "שעת השיא",
                "PcategoryId": 1,
                "Pprice": 350,
                "PextraPriceForAdditionalScreening": 300,
                "PproductionDate": "2019-01-01T00:00:00",
                "Ptype": "הפעלה",
                "PtargetAudience": "נשים ובנות",
                "Ptime": 1,
                "Pdescription": "הי תכנית קצבית, מגבשת וחוויתית במיוחד, למי שמחפשת אווירה כיפית וקלילה מצד אחד, אך רמה גבוהה ומסר מחזק מצד שני."
            },
            {
                "Pid": 4,
                "Pname": "אל הכתר",
                "PcategoryId": 2,
                "Pprice": 350,
                "PextraPriceForAdditionalScreening": 300,
                "PproductionDate": "2019-01-02T00:00:00",
                "Ptype": "הפעלה",
                "PtargetAudience": "נשים ובנות",
                "Ptime": 1,
                "Pdescription": "התכנית פעילה וחגיגית כאחד קולעת מאד לבת מצוה! מצד אחד מאד פעילה, חוויתית ומגבשת מצד שני מעניקה לארוע אויירה מרוממת ותוכן יהודי."
            },
            {
                "Pid": 5,
                "Pname": "להרגיש",
                "PcategoryId": 3,
                "Pprice": 350,
                "PextraPriceForAdditionalScreening": 300,
                "PproductionDate": "2020-01-01T00:00:00",
                "Ptype": "הפעלה",
                "PtargetAudience": "צוותי הוראה",
                "Ptime": 1,
                "Pdescription": "הפעלה אינטראקטיבית שתעניק התנסות בלתי נשכחת ותותיר את הצוות שלך עם כלים של רגישות והכלה שילכו איתן רחוק."
            }
        ]
    },
    reducers: {
        setPrograms: (state, action) => {
            state.programs = action.payload
        },

        clearPrograms: (state) => {
            state.programs = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPrograms } = programsSlice.actions

export default programsSlice.reducer