import React from 'react';
import { FormControl, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

function ExpertForm({ type, setType }) {
    return (
        <FormControl component="fieldset">
            <Typography sx={{ mb: 1, color: 'secondary.main', fontWeight: 700, mt: 2 }}>
                Abogado Experto
            </Typography>
            <RadioGroup
                aria-label="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                sx={{ justifyContent: 'center', flexDirection: { xs: 'row', md: 'column' } }}
            >
                <FormControlLabel
                    value="3"
                    control={
                        <Radio
                            sx={{
                                color: 'secondary.main',
                                '&.Mui-checked': { color: 'secondary.main' },
                            }}
                        />
                    }
                    label="Familia"
                />
                <FormControlLabel
                    value="4"
                    control={
                        <Radio
                            sx={{
                                color: 'secondary.main',
                                '&.Mui-checked': { color: 'secondary.main' },
                            }}
                        />
                    }
                    label="Trabajo"
                />
            </RadioGroup>
        </FormControl>
    );
}

export default ExpertForm;
