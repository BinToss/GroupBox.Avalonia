using System.Collections.ObjectModel;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Interactivity;
using Avalonia.Styling;

namespace GroupBox.Avalonia.Sample.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        ThemeVariantComboBox.ItemsSource = ThemeVariants.Keys as IEnumerable<string>;
        ThemeVariantComboBox.SelectedIndex = 0;
    }

    public ReadOnlyDictionary<string, ThemeVariant> ThemeVariants { get; } = new Dictionary<string, ThemeVariant>(){
        {"Default", ThemeVariant.Default},
        {"Light", ThemeVariant.Light},
        {"Dark",ThemeVariant.Dark}
    }.AsReadOnly();

    internal static App? App => Application.Current as App;
    public static FluentWindow? FluentWindow => App?.FluentWindow;
    public static SimpleWindow? SimpleWindow => App?.SimpleWindow;

    public static void FluentWindowButton_OnChecked(object sender, RoutedEventArgs args)
    {
        if (FluentWindow?.IsVisible is false)
            FluentWindow.Show();
    }

    public static void FluentWindowButton_OnUnchecked(object sender, RoutedEventArgs args)
    {
        if (FluentWindow?.IsVisible is true)
            FluentWindow.Hide();
    }

    public static void SimpleWindowButton_OnChecked(object sender, RoutedEventArgs args)
    {
        if (SimpleWindow?.IsVisible is false)
            SimpleWindow.Show();
    }

    public static void SimpleWindowButton_OnUnchecked(object sender, RoutedEventArgs args)
    {
        if (SimpleWindow?.IsVisible is true)
            SimpleWindow.Hide();
    }

    public void ThemeVariantComboBox_OnSelectionChanged(object sender, SelectionChangedEventArgs args)
    {
        string selection = args.AddedItems[0]?.ToString() ?? "";
        try
        {
            if (App is not null)
                App.RequestedThemeVariant = ThemeVariants[selection];
        }
        catch (KeyNotFoundException) { }
    }
}