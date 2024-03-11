using Avalonia;
using Avalonia.Data;
using Avalonia.Data.Converters;
using Avalonia.Media;

namespace GroupBox.Avalonia.Converters
{
    public static class StaticConverters
    {
        public static FuncMultiValueConverter<Rect?, CombinedGeometry> ConvertBoundsToOuterBorder { get; } =
        new(rects =>
        {
            List<Rect> arr = rects.Cast<Rect>().ToList() ?? throw new NullReferenceException();
            return arr.Count < 3
                ? throw new ArgumentOutOfRangeException(nameof(rects), "Amount of given Bounds was less than 3")
                : new CombinedGeometry(
                    GeometryCombineMode.Exclude,
                    new RectangleGeometry(arr[0]),
                    new RectangleGeometry(arr[1]),
                    new TranslateTransform(-arr[2].Left, -arr[2].Top)
                );
        });

        /// <summary>
        /// Disguise a Thickness (e.g. Margin) as a Rect. The Rect's Left, Right, Top, and Bottom are equal to the Thickness's properties.
        /// </summary>
        public static FuncValueConverter<Thickness?, Rect> ThicknessRectConverter { get; } =
        new(thickness =>
        {
            if (thickness is Thickness thick)
                return new Rect(thick.Left, thick.Top, thick.Right - thick.Left, thick.Top - thick.Bottom);

            throw new InvalidCastException();
        });
    }
}