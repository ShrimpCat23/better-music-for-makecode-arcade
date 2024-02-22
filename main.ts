function Play_sound (instrument: number, note: number, duration: number, volume1: number, volume2: number) {
    if (instrument == 0) {
        music.play(music.createSoundEffect(
        WaveShape.Square,
        note,
        note,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 1) {
        music.play(music.createSoundEffect(
        WaveShape.Triangle,
        note,
        note,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 2) {
        music.play(music.createSoundEffect(
        WaveShape.Sawtooth,
        note,
        note,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 3) {
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        note,
        note,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 4) {
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        note,
        note,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
}
function Play_slide_sound (instrument: number, note: number, duration: number, volume1: number, volume2: number, note2: number) {
    if (instrument == 0) {
        music.play(music.createSoundEffect(
        WaveShape.Square,
        note,
        note2,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 1) {
        music.play(music.createSoundEffect(
        WaveShape.Triangle,
        note,
        note2,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 2) {
        music.play(music.createSoundEffect(
        WaveShape.Sawtooth,
        note,
        note2,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 3) {
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        note,
        note2,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (instrument == 4) {
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        note,
        note2,
        volume1,
        volume2,
        duration,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
}
